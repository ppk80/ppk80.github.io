import { mine, groups, adjacent, collisions } from "./data.js";

const groupName = id => (groups.find(g => g.id === id) || {}).name || id;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Everything leaves the page, so every link opens in a new tab.
const link = (text, url, cls) => url
  ? `<a href="${esc(url)}"${cls ? ` class="${cls}"` : ""} target="_blank" rel="noopener">${esc(text)}</a>`
  : esc(text);

const extras = list => list && list.length
  ? `<span class="extras">${list.map(e => link(e.label, e.url, "extra")).join("<span class=sep>·</span>")}</span>`
  : "";

/* ---------- overlaps ---------- */

function renderCollision(c) {
  const mineList = c.mine.length
    ? c.mine.map(id => {
        const m = mine[id];
        return `<li>${link(m ? m.name : id, m && m.url)}</li>`;
      }).join("")
    : `<li>Fragrance and cosmetics work</li>`;

  const sources = c.src && c.src.length
    ? `<p class="sources"><span class="sources-label">Read more</span>${c.src.map(s => link(s.label, s.url, "extra")).join("<span class=sep>·</span>")}</p>`
    : "";

  return `
    <article class="card">
      <p class="card-meta"><span>${esc(groupName(c.group))}</span></p>
      <h3>${esc(c.headline)}</h3>
      <div class="pairing">
        <div class="side side-mine">
          <span class="side-label">Mine</span>
          <ul>${mineList}</ul>
        </div>
        <div class="versus">meets</div>
        <div class="side side-them">
          <span class="side-label">Theirs</span>
          <ul><li>${esc(c.them)}</li></ul>
          <span class="who">${esc(c.who)}</span>
        </div>
      </div>
      <p>${esc(c.note)}</p>
      ${c.also ? `<p class="also">${esc(c.also)}</p>` : ""}
      ${sources}
    </article>`;
}

document.getElementById("collisions-featured").innerHTML =
  collisions.filter(c => c.featured).map(renderCollision).join("");
document.getElementById("collisions-rest").innerHTML =
  collisions.filter(c => !c.featured).map(renderCollision).join("");

/* ---------- groups ---------- */

document.getElementById("groups-list").innerHTML = groups.map(g => `
  <article class="group">
    <div class="group-head">
      <h3>${link(g.name, g.url)}</h3>
      <span class="pi">${esc(g.pi)}</span>
    </div>
    <span class="axis">${esc(g.axis)}</span>
    <p class="mission">&ldquo;${esc(g.mission)}&rdquo;</p>
    <p class="plain">${esc(g.plain)}</p>
    <div class="people">
      <h4>People</h4>
      <dl>${g.people.map(p => `
        <dt>${link(p.name, p.url)}</dt>
        <dd>${esc(p.role)}${extras(p.extra)}</dd>`).join("")}</dl>
    </div>
  </article>`).join("");

document.getElementById("adjacent-list").innerHTML = adjacent.map(a => `
  <article class="adj">
    <h3>${link(a.name, a.url)}</h3>
    <p class="where">${esc(a.where)}${a.who && a.who !== "—" ? " &middot; " + esc(a.who) : ""}</p>
    <p class="what">${esc(a.what)}${extras(a.extra)}</p>
  </article>`).join("");

/* ---------- everything table ---------- */

const fGroup = document.getElementById("filter-group");
const fMine = document.getElementById("filter-mine");
const wrap = document.getElementById("table-wrap");
const emptyMsg = document.getElementById("table-empty");

groups.forEach(g => {
  if (collisions.some(c => c.group === g.id)) {
    fGroup.insertAdjacentHTML("beforeend", `<option value="${g.id}">${esc(g.name)}</option>`);
  }
});

const usedMine = [...new Set(collisions.flatMap(c => c.mine))]
  .sort((a, b) => mine[a].name.localeCompare(mine[b].name));
usedMine.forEach(id => {
  fMine.insertAdjacentHTML("beforeend", `<option value="${id}">${esc(mine[id].name)}</option>`);
});

function draw() {
  const g = fGroup.value, m = fMine.value;
  const rows = collisions.filter(c => (!g || c.group === g) && (!m || c.mine.includes(m)));

  emptyMsg.hidden = rows.length > 0;
  wrap.innerHTML = rows.length ? `
    <table>
      <thead>
        <tr><th>My work</th><th>Their work</th><th>Group</th><th>What is shared</th></tr>
      </thead>
      <tbody>
        ${rows.map(c => `
          <tr>
            <td class="t-mine">${c.mine.length
              ? c.mine.map(id => link(mine[id].name, mine[id].url)).join("<br>")
              : "Fragrance work"}</td>
            <td class="t-them">${c.src && c.src.length ? link(c.them, c.src[0].url) : esc(c.them)}<br><span class="who">${esc(c.who)}</span></td>
            <td class="t-group">${esc(groupName(c.group))}</td>
            <td class="t-what">${esc(c.headline)}</td>
          </tr>`).join("")}
      </tbody>
    </table>` : "";
}

fGroup.addEventListener("change", draw);
fMine.addEventListener("change", draw);
document.getElementById("filter-clear").addEventListener("click", () => {
  fGroup.value = ""; fMine.value = ""; draw();
});
draw();

/* ---------- tabs ---------- */

document.querySelectorAll(".tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.view).classList.add("active");
    window.scrollTo({ top: 0, behavior: "instant" });
  });
});
