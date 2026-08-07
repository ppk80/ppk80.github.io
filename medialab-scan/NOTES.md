# medialab-scan

A public survey of the MIT Media Lab and its neighbours, organised around where their
work and mine overlap.

Written for family and friends as much as for me, so the copy explains what beating, just
intonation, tangible bits and cosmopoetics actually are rather than assuming them.

**Location and status.** Lives at `f:\xyh\ppk80.github.io\medialab-scan` in the
`ppk80.github.io` repository. Preview it through the shared root server at
`http://localhost:8000/ppk80.github.io/medialab-scan/`.

It is **committed, pushed and publicly live** at https://ppk80.github.io/medialab-scan/,
including this notes file. It began as a private survey, but the public-facing copy and
comparison claims were reviewed on 2026-08-07.

## Structure

- `index.html` — shell and the three view containers
- `data.js` — all content, as five exported tables
- `app.js` — renders the tables into the views; tab switching; table filters
- `styles.css` — light and dark, both via `prefers-color-scheme` and `data-theme`

### Data model

`data.js` exports:

| Export | What it holds |
|---|---|
| `mine` | Xyh's own projects and writing, keyed by id, each with a plain-language blurb |
| `groups` | Ten Media Lab groups: mission quote, plain-language gloss, `axis` tag, people |
| `adjacent` | Nine places outside the Media Lab doing related work |
| `routes` | Three short thematic paths into selected overlap cards |
| `collisions` | Eighteen pairings. `featured: true` puts one on the front of the page |

Links live on the records, not in the markup. `mine[id].url`, `groups[].url`,
`groups[].people[].url`, `adjacent[].url`, and `collisions[].src[]` are all optional —
leave the field off for anything unpublished rather than guessing an address. People and
adjacent entries can also carry `extra: [{label, url}]` for secondary links. Every link
renders through one `link()` helper in `app.js`, so target and rel are set in one place.

`collisions` is deliberately a separate table rather than a field on `groups` or `mine`.
Every view is a projection of it — the front page reads it filtered by `featured`, the
table reads it filtered by group and by `mine[]` membership. Adding a new overlap means
appending one object and nothing else.

Every collision has a `kind` label and a short `contrast` statement. The label names the
strongest connection; the contrast is rendered in a closed “Where they differ” disclosure
so the comparison does not imply equivalence. `routeLabel` is optional and supplies a
shorter label when a collision appears in `routes`.

The `axis` field on each group is my shorthand for what that group shares with me:
*how Xyh works* (Future Sketches, Viral Communications), *what Xyh makes* (Opera of the
Future), *what Xyh is haunted by* (Tangible Media), *how Xyh was trained* (Responsive
Environments), *what Xyh argues* (Critical Matter, Space Enabled, Cyborg Psychology,
Affective Computing), and *how Xyh does research* (Center for Constructive Communication).

## Verified

2026-08-07, Codex pass in the rendered desktop browser:

- 18 overlap cards: 11 featured and 7 further; every card has a kind label and a closed
  contrast disclosure
- 10 group cards, 9 adjacent cards, 3 thematic route cards and 18 index rows
- Route links land on the expected overlap; the Resonance contrast opens and renders
- Tabs work by click and with Left/Right/Home/End keys; `aria-selected`, focus and the
  visible tab panel stay in agreement
- Critical Matter filter → 2 rows (Gaze to the Stars and Resonance); Clear → 18
- Rendered at 1280px in dark mode with no horizontal document overflow; the route index,
  card labels, disclosures and the new Resonance card were inspected visually
- New official sources for Resonance, Open Dance Lab, MIT Music Technology and Future
  Heritage Lab were opened and checked before being added

### Earlier verification history

2026-08-07, in the browser at 1265px and at 375px, light and dark:

- All three views render; tab switching sets `.active` on the right button and section
- 10 featured overlaps, 5 further, 15 rows in the table
- 8 group cards, 7 adjacent cards
- Filters: by group (Opera of the Future → 5), by my project (radial poetics → 2,
  TaboTa → 1), incompatible combination → 0 rows with the empty message shown, Clear → 15
- No console errors
- No horizontal document overflow at 375px; the wide table scrolls inside its own
  container as intended

Then, after adding links:

- 139 links across 30 hosts; none render as `undefined`; all carry
  `target="_blank" rel="noopener"`
- Every URL was checked with curl before being written into `data.js`. All returned 200
  except two that block automated requests but work in a browser — ResearchGate (403) and
  Nicole L'Huillier's portfolio subpage (403, so the link points at her site root instead)
- All three views clean at 375px again after the links went in

Fixed during the build:

- The two filter `<select>` elements sized themselves to their longest option (443px) and
  pushed the document past a 375px viewport. They are now pinned to their label with
  `width: 100%; min-width: 0`, and the label is `flex: 1 1 13rem`.
- The Media Lab article on Paradiso's synthesizer 404s at the URL search results give.
  Replaced with the MIT News video piece and a Media Lab profile that both resolve.
- `media.mit.edu/groups/center-constructive-communication/` does not exist. That group is
  still served under its former name, `social-machines`.

## Undone / known gaps

- **Fourteen Media Lab groups were never examined**: Fluid Interfaces, Camera Culture,
  City Science, Lifelong Kindergarten, Personal Robots, Conformable Decoders,
  Multisensory Intelligence, Social Algorithms, Human Dynamics, Signal Kinetics,
  Sculpting Evolution, Molecular Machines, Nano Cybernetic Biotrek and Biomechatronics.
  The ten covered were chosen for closeness to my work, not for coverage.
- **Some entries still have no link.** Unpublished work — Numinous Drift, Close Harmony,
  Deskarium, Coping, Mouthkit, Navivi, the radial poetics essay — and a handful of people
  with no public page: Chloe Bensahel, Qijing Li, Yufeng Zhao, Treyden Chiaravalloti,
  Kimaya Lecamwasam, Peter Torpey, Xiao Xiao, Sergio Mutis, Ruipeng Wang, Berfin Ataman,
  Eran Egozy, Pat Pataranutaporn, Xin Liu, Deb Roy and the three Cyborg Psychology
  graduate students. Most of these do have Media Lab people pages; they were not looked up.
- **Dates decay.** Group rosters and project lists were read in August 2026. Several
  Media Lab project pages mix current work with archived work back to 2010 without
  marking which is which, so some entries may already be historical. This is the next
  maintenance problem to solve in the data model.
- **One fact is inference, not sourced.** That Gliese shares its mathematics with the
  submarine-tracking acoustics behind the radial poetics essay is my own reading, not
  something either source states. The former assumption that Stanzuary was built without
  knowledge of Information Landscapes has been removed from the public claim.
- The 2026-08-07 additions were inspected visually at desktop width. The existing mobile
  rules remain in place and the new route cards collapse to one column below 44rem, but a
  fresh 375px visual pass was not run after this change.
- The Center for Constructive Communication has no overlap of its own in the table; the
  Local Voices Network is folded into the Critical Matter card. If it earns a card, it
  should be split out.

## Next in Dev

Add `checked` and `status` fields to the research records so active, recent and archival
work can be distinguished as the survey ages.

Working notes with the full unedited survey, including the candid assessments left off
this page, are in the session scratchpad at `medialab-scan-notes.md`.

---

2026-08-07 — Claude Code — Built the page from a survey of eight Media Lab groups plus
seven adjacent institutions. Data model, three views, filters, light and dark. Verified
structurally in the browser; see gaps above, particularly that no one has looked at it yet.

2026-08-07 — Claude Code — Project moved to `f:\xyhtamura\ppk80.github.io\medialab-scan`
and is now live publicly. Added two groups (Affective Computing, Viral Communications) and
two overlaps. Hindcasts now pairs with openFrameworks and the Future Sketches toolkit half,
alongside cornerfit and stitcher, on Xyh's framing that these are tools built because
something needed doing rather than as pieces. Feeling Together pairs against Affective
Computing, framed as a disagreement about where a feeling is located — read off one body,
or running as a circuit between people. Now 10 groups, 17 overlaps, 139 unique URLs, all
checked. Fixed a mobile overflow: `white-space: nowrap` on the extra-link labels broke at
375px once more links were added; they now wrap. Updated `f:\xyh\ROADMAP.md` — moved the
entry from Local & Unpublished to Published, corrected both counts and the paths.

Someone else added a large number of people and project links between sessions (Media Lab
people pages, ACT faculty, the Dither repo, Eran Egozy, Katerina Cizek). All swept and
resolving. Three sit behind bot checks and return 403/405 to scripts while working in a
browser: ResearchGate, DSpace, and Nicole L'Huillier's portfolio subpage.

2026-08-07 — Claude Code — Reworked five cards on Xyh's instruction. LIMITER now pairs
against Ombak Lock, Antemelos, Aliquoto and Desiderata; Numinous Drift and Close Harmony
are gone, Close Harmony folded into the Desiderata entry as the work it became.
TeleAbsence gained From Interiority to Interaction, Insulae Incognita and Shook, and lost
Hindcasts. Vocal Vibrations expanded to seven works and is now framed as the deepest
overlap on the page. The ecosystem card is Cytophone, kíkik and Ave Maria, Gaia Mystica.
The room card gained Metachamber and Desiderata. 157 links, none broken.

Found while checking URLs: **the portfolio index at xyhtamura.github.io links to
`/kikik/`, which 404s.** kíkik is listed on the site and in ROADMAP.md as published but is
not deployed. Its entry here carries no link and says so. Worth fixing at the source.

Also note **Hindcasts is now unreferenced** by any card, having been removed from both the
TeleAbsence and ecosystem pairings. It is represented only indirectly, through Metachamber
on the room card. If the suite deserves its own overlap, it needs one written.

2026-08-07 — Claude Code — Added 139 outbound links: Xyh's own projects to
xyhtamura.github.io, Bandcamp, SoundCloud and the journals, and the MIT side to group
pages, project pages, Wikipedia and press coverage. Every URL curl-checked before use;
three bad ones caught and fixed or replaced. Left undone: people entries with no link,
listed above.

2026-08-07 — Antigravity — Expanded outbound links to 172 across 41 hosts by adding MIT Media Lab people profile pages, Wikipedia entries, individual project pages (Automatar, After AGI, MirrorFugue, InSituWear, Resonance, Doppelmarsh, BuzzCam, HearThere, Cyber Subin, Aspen Movie Splat, Refraction, On Reaction-Diffusion), and faculty pages for adjacent entities (ACT artists Renée Green, Judith Barry, Joan Jonas, Krzysztof Wodiczko; Co-Creation Studio's Kat Cizek & Ceasar McDowell). Every added URL was curl/HTTP verified before inclusion.

2026-08-07 — Codex — Reviewed the rendered public page and completed the first
public-facing comparison pass. Corrected the stale counts to 10 groups and 18 overlaps;
added Resonance as an eleventh featured comparison; expanded Cyber Subin into Open Dance
Lab; and added the MIT Music Technology Program and Future Heritage Lab, bringing the
adjacent list to nine. Added three thematic routes, a Mechanical / Methodological /
Conceptual / Biographical label on every overlap, and a closed “Where they differ”
statement on all 18 cards. Removed the unsupported claim that Stanzuary was developed
without knowledge of Information Landscapes and softened two named-researcher headlines.
Made the three views proper keyboard-operable tabs and exposed the overlap kind in the
index. Verified the 18/11/7 counts, route jump, contrast disclosure, tab keyboard state,
Critical Matter filter and desktop dark rendering at 1280px. New external sources were
opened successfully; the separate `musictech.mit.edu` programme link returned 502 to the
checker and was omitted in favour of the resolving Arts at MIT course page. A fresh 375px
visual pass remains undone. — Codex
