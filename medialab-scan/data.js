// medialab-scan — data
//
// Tables and the links between them:
//   mine[]      — Xyh's own projects and writing
//   groups[]    — research groups at the MIT Media Lab
//   adjacent[]  — related places outside the Media Lab
//   collisions[]— the pairings this page exists to show
//
// Blurbs are written for readers who do not work in this field. Name the
// mechanism, not the significance.
//
// Every `url` below returned HTTP 200 when checked on 2026-08-07. Entries with
// no url are unpublished; leave the field off rather than guessing an address.

export const mine = {
  stanzuary: { name: "Stanzuary", year: "2026", url: "https://xyhtamura.github.io/stanzuary/", blurb: "A text editor where words are placed in three dimensions rather than on a flat page. You move around the text instead of scrolling it." },
  tabota: { name: "TaboTa", year: "2025", url: "https://xyhtamura.github.io/tabota/", blurb: "A file format and shared engine for writing down timed events — notes, images, movements — so several different programs can read the same score." },
  ombaklock: { name: "Ombak Lock", year: "2026", url: "https://xyhtamura.github.io/ombak-lock/", blurb: "A tuning puzzle. Two notes slightly apart produce a slow pulsing called beating; each lock opens when you match its target pulse. Perfect unison is failure. Built on Balinese gamelan, where instruments are deliberately tuned in beating pairs." },
  aliquoto: { name: "Aliquoto", year: "2026", url: "https://xyhtamura.github.io/aliquoto/", blurb: "A synthesizer built from whole-number frequency ratios rather than the twelve keys of a piano, with the fractions exposed as controls." },
  cella: { name: "Cella", year: "2026", url: "https://xyhtamura.github.io/cella/", blurb: "A synthesizer that models physical resonators — the way a struck object rings — rather than generating tones electronically." },
  moire: { name: "Moire", year: "2026", url: "https://xyhtamura.github.io/moire/", blurb: "A synthesizer where oscillators write into each other's phase, with the usual fixed algorithm chart replaced by live equations and arbitrary routing." },
  antemelos: { name: "Antemelos", year: "2025", url: "https://xyhtamura.github.io/antemelos/", blurb: "A melody generator that works in raw frequencies rather than in any scale, so it produces pitches that fall between the notes of a keyboard." },
  gliese: { name: "Gliese", year: "2026", url: "https://xyhtamura.github.io/gliese/", blurb: "A reverb and delay built by tracing sound rays through air, the way light is traced through glass, instead of using the usual approximations." },
  metachamber: { name: "Metachamber", year: "2026", url: "https://xyhtamura.github.io/hindcasts/metachamber/", blurb: "A reverb that looks ahead for the silences in a recording and fits each tail to the gap it has to die in, instead of applying one fixed decay throughout." },
  hindcasts: { name: "Hindcasts", year: "2026", url: "https://xyhtamura.github.io/hindcasts/", blurb: "Audio and video effects that read the whole recording before they start. Because they know what is coming, they can react before an event happens, or run time backwards." },
  cytophone: { name: "Cytophone", year: "2026", url: "https://xyhtamura.github.io/cytophone/", blurb: "Seven instruments that make sound from biological processes — cell activity, plant pores, tissue movement." },
  kikik: { name: "kíkik", year: "2026", blurb: "Listens to a recording for the moments a sound starts, then uses those moments to seed a swarm that moves like a colony of small organisms, and lets the swarm trigger sound back. The link on the portfolio index is currently dead." },
  benzaiten: { name: "Benzaiten", year: "2026", url: "https://xyhtamura.github.io/benzaiten/", blurb: "A video synthesizer whose image is a live simulation of moving fluid and magnetic fields, running on the graphics card and steered by touch and sound." },
  w2xdx: { name: "W2XDX", year: "2026", url: "https://xyhtamura.github.io/w2xdx/", blurb: "An invented television standard. It scans the picture along a space-filling curve rather than in horizontal lines, and simulates the ghosting of a distant broadcast." },
  aeropane: { name: "Aeropane", year: "2026", url: "https://xyhtamura.github.io/aeropane/", blurb: "A filter that simulates looking through real glass and gel — frosting, fluting, scattering — rather than applying a generic blur." },
  cornice: { name: "Cornice", year: "2026", url: "https://xyhtamura.github.io/cornice/", blurb: "A terrarium made entirely of text characters. A balcony at the edge of an impossible city, with organisms, weather and specimens you can click to inspect." },
  deskarium: { name: "Deskarium", year: "2026", blurb: "A sound-responsive window onto open sea, drawn in text characters on a small desk screen. Fish respond to how a sound is made rather than how loud it is, and nothing in it can die or be lost. Unpublished." },
  coping: { name: "Coping", year: "2026", blurb: "Three grasses in a rock-paper-scissors relationship on a meadow. Each may only cut back its prey during its own part of the day, so the field fills overnight and is cleared through the day. Wind decides how fast everything mixes. Unpublished." },
  plica: { name: "Plica", year: "2026", url: "https://xyhtamura.github.io/plica/", blurb: "A collage that behaves like a sheet of paper unfolding without end." },
  insulae: { name: "Insulae Incognita", year: "2025", url: "https://xyhtamura.github.io/insulaeincognita/", blurb: "A generated archipelago drawn from the letters and scripts of cultures that traded with Manila before Spanish contact." },
  ofanothershore: { name: "Of Another Shore", year: "2025–", url: "https://ppk80.github.io/of-another-shore/", blurb: "Master's thesis. An interlinked suite of writing, sound and video about liminality and multiplicity, working through Filipino-Japanese heritage, deep time and things that do not last." },
  shook: { name: "Shook", year: "2024–", url: "https://xyhtamura.github.io/shook/", blurb: "Digital poetry and video about earthquakes — seismic damage read as a national inheritance rather than as a series of separate accidents." },
  cutline: { name: "Cutline", year: "2026", url: "https://xyhtamura.github.io/cutline/", blurb: "A poetry deck assembled live from text and images pulled in from outside the piece." },
  kubocities: { name: "KuboCities", year: "2025", url: "https://xyhtamura.github.io/kubocities/", blurb: "A serial poem built in the visual language of the 1990s web." },
  desiderata: { name: "Desiderata", year: "2026", url: "https://xyhtamura.bandcamp.com/album/desiderata", blurb: "An album made only from manipulated voice and breath, tuned against recordings of oceans and insects, then layered and stretched. It absorbed Close Harmony, a tool for building four-part harmony out of the harmonic series instead of the twelve notes of a keyboard." },
  songs: { name: "Songs, 2009–2023", url: "https://masmxyh.bandcamp.com/album/pacing-to", blurb: "The songwriting career underneath everything else: experimental pop, a dream-pop band, a six-track album written, sung, produced, mixed and mastered solo, and film scores." },
  intermedia: { name: "Intermedia Musicopoetics and Transpractice Songwriting in “Night Bus”", year: "2025", url: "https://www.researchgate.net/publication/393631680_Intermedia_Musicopoetics_and_Transpractice_Songwriting_in_Night_Bus", blurb: "A conference paper taking apart one of Xyh's own songs to show how the writing, the music and the recording decide each other rather than arriving in sequence." },
  glossolalia: { name: "Glossolalia", year: "2026", url: "https://xyhtamura.github.io/glossolalia-invitro.html", blurb: "A piece on speaking in tongues — voice organised as sound before it is organised as language." },
  breakfast: { name: "breakfast", year: "2025", url: "https://xyhtamura.github.io/breakfast.mp3", blurb: "A spoken word audio poem." },
  eosforos: { name: "Eosforos", year: "2025", url: "https://xyhtochrome.bandcamp.com/album/eosforos", blurb: "An album and live performance about the Hadean Eon — the earth's first, molten age — with Tusa Montes on saronay, kulintang and tambi. Shown inside an exhibition on chaos magic." },
  avemaria: { name: "Ave Maria, Gaia Mystica", year: "2007", url: "http://soundcloud.com/user3241149/sets/ave-maria-gaia-mystica/s-2BglnrCOz8R?si=4aa5757e7569431baf9c8eee2a88b43f", blurb: "Concert music built from recordings of stars, animals, earth and ice, performed with a custom glass harmonica." },
  xyhnthesizer: { name: "xyhnthesizer", year: "2026", url: "https://www.instagram.com/p/DXrk60ITOau/", blurb: "A sampled instrument built entirely from Xyh's own recorded voice, played from a keyboard like an organ." },
  mouthkit: { name: "Mouthkit", year: "2026", blurb: "A tool that chops recorded speech into individual speech sounds and lays them out on a grid to be played. Unpublished." },
  sgueltch: { name: "Sgueltch", year: "2025–", url: "https://xyhtamura.github.io/sgueltch/", blurb: "A set of tools that damage images and sound in organic, wet-looking ways rather than in the rigid blocky way digital files normally fail." },
  open4: { name: "Open4", year: "2025", url: "https://xyhtamura.github.io/open4/", blurb: "Ambient video looping the empty rooms and transitional shots from 1980s–2000s gay adult videotapes, leaving the settings and removing the scenes." },
  tanimkalye: { name: "Tanim-Kalye", year: "2025", url: "https://xyhtamura.github.io/tanim-kalye/", blurb: "A research and poetry installation mapping the plants of one Quezon City neighbourhood, made with residents, local officials and biologists, and shown in a community restaurant." },
  istorya: { name: "Istorya sang Bȧlatyagon", year: "2025", url: "https://xyhtamura.github.io/istorya-sang-balatyagon/", blurb: "The Affect Atlas: a method where community members tell personal stories tied to specific places, and those stories are gathered into a shared map. Made for a gender audit in Iloilo." },
  makwela: { name: "Makwela", year: "2024", url: "https://www.usacfi.net/atipan-gei-resources.html", blurb: "A photo-story map. Participants photograph their own routes and surroundings, attach accounts to them, and the results become an interactive map used in transport policy research." },
  radialpoetics: { name: "The Radial Poetics of Planets and Stars", year: "2025", blurb: "An essay arguing that the familiar cutaway diagram of a planet — core, mantle, crust — is a Cold War invention, built from submarine sonar, nuclear-test monitoring and mining, and that it can be put to other uses. Written from a Filipino physicist's position. Unpublished." },
  hauntotechnics: { name: "Hauntotechnics", year: "2026", url: "https://www.artemresearchcollective.com/zine", blurb: "An essay putting Derrida's idea of haunting together with Yuk Hui's argument that technology is culturally specific, to ask how being haunted is mediated differently in different places." },
  dungeonsynth: { name: "Dungeon Synth as Transcultural and Transtemporal Construction", year: "2026", url: "https://www.researchgate.net/publication/401526519_Dungeon_Synth_as_Transcultural_and_Transtemporal_Construction_Synthetic_Medievalisms", blurb: "A conference paper on a music genre that reconstructs a medieval past that never existed, using synthesizers — a reconstruction of a reconstruction." },
  interiority: { name: "From Interiority to Interaction", year: "2025", url: "https://journals.ub.uni-koeln.de/index.php/phidi/article/view/11659", blurb: "A published paper asking what counts as a person when the other party is a machine, using Japanese practices around robots and dolls to reframe the question." },
  navivi: { name: "Navivi", year: "2026", blurb: "A plush robot companion with a screen for a face, built on a Raspberry Pi with removable electronics. With Mithi Sevilla. Unpublished." },
  toys: { name: "The ~50 browser projects", year: "2024–2026", url: "https://xyhtamura.github.io/", blurb: "The whole shelf: around fifty self-contained web pages, each one a tool, instrument or toy, all of them running with no server and no installation." },
  physics: { name: "BS Physics, then instruments", year: "2007–", blurb: "A physics degree from the theoretical group at UP Diliman, followed by fifteen years of building sound instruments — and an ongoing folder of open physics and mathematics questions raised by that building." }
};

export const groups = [
  {
    id: "future-sketches", name: "Future Sketches", lab: "MIT Media Lab", pi: "Zach Lieberman",
    url: "https://www.media.mit.edu/groups/future-sketches/overview/",
    mission: "Exploring the essence of code as a creative medium.",
    plain: "A group that treats writing software the way other people treat sketching — small, fast, daily, made to be looked at. It is named after Muriel Cooper, who ran the Media Lab's typography group in the 1980s.",
    axis: "How Xyh works",
    people: [
      { name: "Zach Lieberman", url: "https://en.wikipedia.org/wiki/Zachary_Lieberman", role: "Adjunct Associate Professor. Co-created openFrameworks, the open-source toolkit much computer art is built on, and co-founded the School for Poetic Computation in New York. Has published a code sketch nearly every day since 2016.", extra: [{ label: "openFrameworks", url: "https://openframeworks.cc/" }, { label: "School for Poetic Computation", url: "https://sfpc.io/people/zach-lieberman/" }] },
      { name: "Lingdong Huang", url: "https://www.media.mit.edu/people/lingdong/overview/", role: "PhD researcher. Procedural landscape and creature drawing; wrote his own programming language, Dither.", extra: [{ label: "Dither", url: "https://github.com/LingDong-/dither-lang" }] },
      { name: "Chloe Bensahel", url: "https://chloebensahel.com/", role: "Research affiliate. Textile and language." },
      { name: "Qijing Li", role: "Research affiliate." },
      { name: "Yufeng Zhao", url: "https://www.media.mit.edu/people/yufengz/overview/", role: "Graduate student." }
    ]
  },
  {
    id: "opera-of-the-future", name: "Opera of the Future", lab: "MIT Media Lab", pi: "Tod Machover",
    url: "https://www.media.mit.edu/groups/opera-of-the-future/overview/",
    mission: "Extending expression, learning, and health through innovations in musical composition, performance, and participation.",
    plain: "The Media Lab's music group. It builds new instruments, writes operas, and runs projects where a whole city helps compose a piece. Machover also directs research for the entire Lab.",
    axis: "What Xyh makes",
    people: [
      { name: "Tod Machover", url: "https://en.wikipedia.org/wiki/Tod_Machover", role: "Muriel R. Cooper Professor of Music and Media, and Faculty Director of the MIT Media Lab. Composer; invented hyperinstruments and the Hyperscore composing software.", extra: [{ label: "At the Media Lab", url: "https://www.media.mit.edu/people/tod/overview/" }] },
      { name: "Antonis Christou", url: "https://www.media.mit.edu/projects/limiter-the-microtonal-arcade-machine/overview/", role: "Graduate student. Builds microtonal instruments — LIMITER and the Automatar.", extra: [{ label: "Automatar", url: "https://www.media.mit.edu/projects/automatar/overview/" }] },
      { name: "Alexandra Rieger", url: "https://www.media.mit.edu/people/arieger/projects/", role: "Graduate student. Cognitive neuroscientist and engineer building instruments that are also medical devices." },
      { name: "Treyden Chiaravalloti", url: "https://www.media.mit.edu/people/treydenc/overview/", role: "Graduate student. Performance, film and installation; wrote the musical After AGI.", extra: [{ label: "After AGI", url: "https://www.media.mit.edu/projects/after-agi/overview/" }] },
      { name: "Manaswi Mishra", url: "https://www.media.mit.edu/people/manaswim/projects/", role: "Graduate student. Sound and listening." },
      { name: "Kimaya Lecamwasam", url: "https://www.media.mit.edu/people/klecamwa/overview/", role: "Graduate student. Music and health." },
      { name: "Nicole L'Huillier", url: "https://nicolelhuillier.com/", role: "Former member. Chilean sound artist; made the PARACANTORA." },
      { name: "Rébecca Kleinberger", url: "https://rebeccakleinberger.com/com/", role: "Former member, now professor at Northeastern. Studies the voice beyond words, including across species." },
      { name: "Peter Torpey", url: "https://dspace.mit.edu/handle/1721.1/79261", role: "Former member. Wrote the Media Scores dissertation." }
    ]
  },
  {
    id: "tangible-media", name: "Tangible Media", lab: "MIT Media Lab", pi: "Hiroshi Ishii",
    url: "https://www.media.mit.edu/groups/tangible-media/overview/",
    mission: "Invent new tangible and embodied interactions that inspire and engage people.",
    plain: "A group trying to give digital information a physical body you can touch and shape, instead of leaving it behind glass. Half the work is materials science; the other half is about memory, absence and the dead.",
    axis: "What Xyh is haunted by",
    people: [
      { name: "Hiroshi Ishii", url: "https://en.wikipedia.org/wiki/Hiroshi_Ishii_(computer_scientist)", role: "Jerome B. Wiesner Professor of Media Arts and Sciences. Proposed Tangible Bits and Radical Atoms; leads TeleAbsence.", extra: [{ label: "At the Media Lab", url: "https://www.media.mit.edu/people/ishii/overview/" }, { label: "TeleAbsence", url: "https://www.media.mit.edu/projects/teleabsence-1/overview/" }] },
      { name: "Cyrus Clarke", url: "https://www.media.mit.edu/projects/anemoia-device/overview/", role: "Researcher. Built the Anemoia Device." },
      { name: "Xiao Xiao", role: "Former member. Made MirrorFugue.", extra: [{ label: "MirrorFugue", url: "https://www.media.mit.edu/projects/mirrorfugue/overview/" }] }
    ]
  },
  {
    id: "critical-matter", name: "Critical Matter", lab: "MIT Media Lab", pi: "Behnaz Farahi",
    url: "https://www.media.mit.edu/groups/critical-matter/overview/",
    mission: "Designing across the scale, imagining a transformative future.",
    plain: "A new and very small group that puts materials research together with feminist and political theory. Its work runs from single garments up to whole buildings, and it treats materials as things that sense and respond rather than as passive stuff.",
    axis: "What Xyh argues",
    people: [
      { name: "Behnaz Farahi", url: "https://en.wikipedia.org/wiki/Behnaz_Farahi", role: "Assistant Professor. Trained as an architect; works across fashion, architecture and interaction. Calls her position surveillance feminism — turning cameras and tracking into instruments of empowerment.", extra: [{ label: "Her own site", url: "https://behnazfarahi.com/" }, { label: "At the Media Lab", url: "https://www.media.mit.edu/people/behnaz_f/overview/" }] },
      { name: "Sergio Mutis", url: "https://www.media.mit.edu/people/smutis/overview/", role: "Researcher. Gaze to the Stars, InSituWear.", extra: [{ label: "InSituWear", url: "https://www.media.mit.edu/projects/insituwear/overview/" }] },
      { name: "Ruipeng Wang", url: "https://www.media.mit.edu/people/ruipengw/overview/", role: "Researcher. Resonance.", extra: [{ label: "Resonance", url: "https://www.media.mit.edu/projects/resonance/overview/" }] },
      { name: "Berfin Ataman", role: "Researcher. InSituWear.", extra: [{ label: "InSituWear", url: "https://www.media.mit.edu/projects/insituwear/overview/" }] }
    ]
  },
  {
    id: "responsive-environments", name: "Responsive Environments", lab: "MIT Media Lab", pi: "Joseph A. Paradiso",
    url: "https://www.media.mit.edu/groups/responsive-environments/overview/",
    mission: "Augmenting and mediating human experience, interaction, and perception with sensor networks.",
    plain: "A group that covers places and bodies in sensors, then finds ways to make the resulting data audible, visible or wearable. It has the Lab's deepest bench for sound and electronics.",
    axis: "How Xyh was trained",
    people: [
      { name: "Joseph A. Paradiso", url: "https://en.wikipedia.org/wiki/Joseph_A._Paradiso", role: "Alexander W. Dreyfoos Professor. PhD in experimental high-energy physics, MIT 1981; built detectors at CERN and spacecraft systems at Draper Lab. Also spent fifteen years building what is likely the world's largest homemade modular synthesizer — over 125 modules, now in the MIT Museum.", extra: [{ label: "At the Media Lab", url: "https://www.media.mit.edu/people/joep/overview/" }] },
      { name: "Eran Egozy", url: "https://en.wikipedia.org/wiki/Eran_Egozy", role: "Collaborator; MIT professor of music technology. Co-author on symbiotic virtuosity.", extra: [{ label: "MIT MTA Profile", url: "https://mta.mit.edu/person/eran-egozy" }] },
      { name: "Jordan Rudess", url: "https://news.mit.edu/2024/model-virtuosity-jordan-rudess-jam-bot-1119", role: "Visiting artist. Keyboardist; spent a year building and performing with the jam_bot." }
    ]
  },
  {
    id: "space-enabled", name: "Space Enabled", lab: "MIT Media Lab", pi: "Danielle Wood",
    url: "https://www.media.mit.edu/groups/space-enabled/overview/",
    mission: "Advancing justice in Earth's complex systems using designs enabled by space.",
    plain: "A group that uses satellites and space research for problems on the ground — deforestation, drought, environmental injustice — and treats that work as a political question, not only a technical one. Art is one of its six named research methods.",
    axis: "What Xyh argues",
    people: [
      { name: "Danielle Wood", url: "https://www.media.mit.edu/people/drwood/overview/", role: "Associate Professor, jointly in Media Arts and Sciences and in Aeronautics and Astronautics. Also MIT's Faculty Lead for African and African Diaspora Studies." },
      { name: "Prathima Muniyappa", url: "https://www.media.mit.edu/people/prathima/projects/", role: "Researcher. Braided Cosmopoetics and the CthulhuCosmos work on Indigenous cosmology in space." }
    ]
  },
  {
    id: "cyborg-psychology", name: "Cyborg Psychology", lab: "MIT Media Lab", pi: "Pat Pataranutaporn",
    url: "https://www.media.mit.edu/groups/cyborg-psychology/overview/",
    mission: "Inventing, investigating, and inspiring human-AI systems for human flourishing.",
    plain: "A group studying what living alongside AI actually does to people — memory, attachment, self-image — and building systems meant to help rather than exploit that. It keeps an explicit channel open for artists and humanities researchers.",
    axis: "What Xyh argues",
    people: [
      { name: "Pat Pataranutaporn", url: "https://www.media.mit.edu/people/patpat/overview/", role: "Assistant Professor. Studies minds shaped by machines, made in machines, and merged with machines.", extra: [{ label: "Personal site", url: "https://www.patpat.me/" }] },
      { name: "Xin Liu", role: "Research affiliate; artist." },
      { name: "Chayapatr Archiwaranguprok", url: "https://www.media.mit.edu/people/pub/overview/", role: "Graduate student." },
      { name: "Constanze Albrecht", role: "Graduate student." },
      { name: "Sheer Karny", url: "https://www.media.mit.edu/people/skarny/overview/", role: "Graduate student." }
    ]
  },
  {
    id: "constructive-communication", name: "Center for Constructive Communication", lab: "MIT Media Lab", pi: "Deb Roy",
    url: "https://www.media.mit.edu/groups/social-machines/overview/",
    mission: "Prototyping a better future for communication through human-led, AI-assisted systems for collective listening, understanding, and action.",
    plain: "A centre that runs facilitated conversations in real communities, records them with consent, and builds tools that let the resulting stories be found and heard without flattening them into statistics.",
    axis: "How Xyh does research",
    people: [
      { name: "Deb Roy", url: "https://en.wikipedia.org/wiki/Deb_Roy", role: "Professor of Media Arts and Sciences; directs the centre. Previously founded Bluefin Labs, later acquired by Twitter; co-founded and chairs Cortico, the nonprofit that runs the Local Voices Network.", extra: [{ label: "At the Media Lab", url: "https://www.media.mit.edu/people/dkroy/overview/" }, { label: "Cortico", url: "https://cortico.ai/" }, { label: "Local Voices Network", url: "https://www.media.mit.edu/projects/local-voices-network/overview/" }] }
    ]
  }
];

export const adjacent = [
  { name: "The Trope Tank", where: "MIT Comparative Media Studies / Writing", who: "Nick Montfort", url: "https://tropetank.com/", extra: [{ label: "Montfort's site", url: "https://nickm.com/me.html" }, { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nick_Montfort" }], what: "Not part of the Media Lab. A lab for computer-generated writing and for studying old computers as literary machines. Montfort has published ten books written by programs; a 2026 one was also installed at the Jeu de Paume in Paris. This is where electronic literature actually lives at MIT." },
  { name: "MIT CAST", where: "Center for Art, Science & Technology", who: "—", url: "https://arts.mit.edu/cast/projects/visiting-artists/", what: "Brings artists into MIT labs specifically for the research phase, not just to exhibit. Recent visiting artists include Jordan Rudess, who built the jam_bot with Responsive Environments." },
  { name: "Co-Creation Studio / Open Documentary Lab", where: "MIT", who: "Kat Cizek, Ceasar McDowell", url: "https://cocreationstudio.mit.edu/", extra: [{ label: "WORLDING", url: "https://cocreationstudio.mit.edu/worlding/" }, { label: "Kat Cizek profile", url: "https://cocreationstudio.mit.edu/team/katerina-cizek/" }, { label: "Kat Cizek Wikipedia", url: "https://en.wikipedia.org/wiki/Katerina_Cizek" }, { label: "Ceasar McDowell (MIT DUSP)", url: "https://dusp.mit.edu/people/ceasar-mcdowell" }], what: "Runs WORLDING, an incubator for place-based climate storytelling made with communities rather than about them. The 2026 round drew 128 team applications and selected groups in Hawai'i, Indonesia, Zimbabwe and Canada. The closest institutional match anywhere to Xyh's participatory research." },
  { name: "ACT", where: "MIT School of Architecture and Planning", who: "Renée Green, Judith Barry, Joan Jonas, Krzysztof Wodiczko", url: "https://act.mit.edu/about/mission/", extra: [{ label: "Renée Green", url: "https://act.mit.edu/people/renee-green/" }, { label: "Judith Barry", url: "https://act.mit.edu/people/judith-barry/" }, { label: "Joan Jonas", url: "https://act.mit.edu/people/joan-jonas/" }, { label: "Krzysztof Wodiczko", url: "https://act.mit.edu/people/krzysztof-wodiczko/" }], what: "MIT's critical art programme. More installation, theory and discourse than engineering." },
  { name: "metaLAB", where: "Harvard, Berlin, Basel", who: "—", url: "https://metalab.harvard.edu/", what: "Critical and creative practice across disciplines." },
  { name: "CAMLab", where: "Harvard", who: "—", url: "https://camlab.fas.harvard.edu/", what: "Immersive sensory media built out of humanities research." },
  { name: "CCRMA", where: "Stanford", who: "—", url: "https://ccrma.stanford.edu/groups", what: "Computer music research; its Max Lab is the centre for building physical things you play sound with." }
];

// The pairings. `featured: true` puts it on the front of the page.
export const collisions = [
  {
    id: "stanzuary-cooper", featured: true, group: "future-sketches",
    mine: ["stanzuary"],
    them: "Information Landscapes",
    who: "Muriel Cooper, David Small, Suguru Ishizaki and Lisa Strausfeld",
    src: [
      { label: "Muriel Cooper", url: "https://en.wikipedia.org/wiki/Muriel_Cooper" },
      { label: "On Information Landscapes", url: "https://revue-backoffice.com/en/issues/01-making-do-making-with/nolwenn-maudet-muriel-cooper-information-landscapes" }
    ],
    headline: "Xyh rebuilt the project the group is named after, without knowing it was there",
    note: "Muriel Cooper ran the Visible Language Workshop, which moved into the Media Lab in 1985 as one of its founding groups. She built an interface in which text sat in three-dimensional space and the reader flew through it, and showed it at a conference in 1994. Future Sketches is named in her honour. Stanzuary is a text editor where words are placed in three dimensions and you move through them. Same object, thirty years apart, arrived at independently and in a web browser.",
    also: "Machover's professorship is also named after Cooper. Her name sits on the group closest to how Xyh works and on the chair of the group closest to what Xyh makes."
  },
  {
    id: "hauntotechnics-teleabsence", featured: true, group: "tangible-media",
    mine: ["hauntotechnics", "interiority", "ofanothershore", "insulae", "shook"],
    them: "TeleAbsence",
    who: "Hiroshi Ishii, with MirrorFugue by Xiao Xiao",
    src: [
      { label: "TeleAbsence", url: "https://www.media.mit.edu/projects/teleabsence-1/overview/" },
      { label: "MIT News on it", url: "https://news.mit.edu/2025/teleabsence-poetic-encounters-past-0502" },
      { label: "MirrorFugue", url: "https://www.media.mit.edu/projects/mirrorfugue/overview/" }
    ],
    headline: "The same argument about being haunted, one written and one built",
    note: "TeleAbsence builds channels of imagined communication with the dead and with earlier versions of oneself. Its starting quote is from the Japanese writer Rokusuke Ei: people die twice, first when they die, then when they are forgotten. Ishii is explicit that this is not about synthesising a convincing copy of a person. He calls the aim a poetic encounter, and builds it around objects the person actually touched — typewriters, telephones, brushes, pianos. Hauntotechnics argues that haunting is mediated and works differently in different cultures; From Interiority to Interaction gets at the same question from the other side, through Japanese ways of treating the dead, the unconscious and other presences as parties you can still be in relation with. TeleAbsence is that argument as hardware, made by a Japanese researcher from a Japanese source.",
    also: "The other three approach it as making a place speak rather than a person. Insulae Incognita generates islands out of the scripts of cultures that traded with Manila before Spanish contact, imagining a past by writing it back into land. Shook reads earthquake damage as inherited rather than accidental. And MirrorFugue, in the same group, projects a dead composer's last recorded performance so living musicians can play alongside him."
  },
  {
    id: "ombaklock-limiter", featured: true, group: "opera-of-the-future",
    mine: ["ombaklock", "antemelos", "aliquoto", "desiderata"],
    them: "LIMITER: the Microtonal Arcade Machine",
    who: "Antonis Christou",
    src: [
      { label: "LIMITER", url: "https://www.media.mit.edu/projects/limiter-the-microtonal-arcade-machine/overview/" },
      { label: "Automatar", url: "https://www.media.mit.edu/projects/automatar/overview/" }
    ],
    headline: "One graduate student is working on exactly the problem Xyh has four pieces of work for",
    note: "Most Western music uses twelve fixed notes. Tuning by whole-number ratios instead gives purer intervals but is hard to play, because the available notes keep changing. LIMITER solves this by making it an arcade game: a joystick and one button, tuning systems swappable mid-performance, and a visual display that hides the arithmetic while staying readable to the audience. Xyh has four pieces of work in the same territory — a puzzle game built on beating rates, a melody generator that ignores scales entirely, a synthesizer with the ratios exposed as controls, and an album whose voices are tuned against oceans and insects rather than against a keyboard.",
    also: "Christou also built the Automatar, a string instrument with a graphics processor mounted inside it that listens to how it is being played and answers by vibrating its own strings."
  },
  {
    id: "tabota-mediascores", featured: true, group: "opera-of-the-future",
    mine: ["tabota"],
    them: "Media Scores, and Dither",
    who: "Peter Torpey (Opera of the Future) and Lingdong Huang (Future Sketches)",
    src: [
      { label: "Lingdong Huang", url: "https://www.media.mit.edu/people/lingdong/overview/" },
      { label: "Media Scores dissertation", url: "https://dspace.mit.edu/handle/1721.1/79261" },
      { label: "Dither", url: "https://github.com/LingDong-/dither-lang" }
    ],
    headline: "Two people at the Lab have built what TaboTa is, from opposite directions",
    note: "Torpey's doctoral thesis, Media Scores, is a system for writing one score that drives several media at once — sound, light, image, movement — so a work can be composed as a whole rather than assembled from separate tracks. That is what TaboTa is for. The difference is that Media Scores is a finished dissertation and TaboTa is load-bearing infrastructure running across nine active projects.",
    also: "Separately, Lingdong Huang wrote Dither, his own programming language for making visual and audio work. A graduate student in each group has decided the right response to this field is to build a language. So has Xyh."
  },
  {
    id: "radialpoetics-cosmopoetics", featured: true, group: "space-enabled",
    mine: ["radialpoetics", "gliese"],
    them: "Braided Cosmopoetics: The Khasi Cosmo-vision for an Ethical Space Exploration",
    who: "Prathima Muniyappa",
    src: [{ label: "Braided Cosmopoetics", url: "https://www.media.mit.edu/projects/braided-cosmopoetics-the-khasi-cosmo-vison-for-an-ethical-space-exploration/overview/" }],
    headline: "Two accounts of the same picture — a line drawn from the centre of a world to the sky",
    note: "The Khasi people of Meghalaya, in northeastern India, trace their ancestry to the stars and are known for growing bridges by braiding living tree roots. At the centre of their oral history is Sophtehpenanang: a tree whose roots reached the depths of the earth and whose canopy reached the heavens, rising from the earth's navel, understood as a stairway for travelling to the sky. Xyh's essay traces the same shape — the vertical line through a planet, core to surface to space — but arrives at it through Cold War submarine sonar, nuclear-test seismology and mining. Two independent genealogies of one image, and neither is complete without the other.",
    also: "Space Enabled's applied work — watching deforestation in Ghana, drought in Angola, invasive species in Benin — is the exact move the essay's last paragraph proposes: taking an instrument built for war and extraction and pointing it somewhere else. There is also a likely link to Gliese, which traces sound rays through layered air using the same mathematics developed for tracking submarines through layered ocean."
  },
  {
    id: "istorya-gaze", featured: true, group: "critical-matter",
    mine: ["istorya", "makwela", "tanimkalye"],
    them: "Gaze to the Stars, and the Local Voices Network",
    who: "Behnaz Farahi (Critical Matter) and Deb Roy's centre with Cortico",
    src: [
      { label: "Gaze to the Stars", url: "https://behnazfarahi.com/Gaze-to-the-stars/" },
      { label: "Press coverage", url: "https://www.wbur.org/news/2025/03/12/mit-gaze-to-the-stars-artfinity-behnaz-farahi" },
      { label: "Local Voices Network", url: "https://www.media.mit.edu/projects/local-voices-network/overview/" }
    ],
    headline: "The same method, run on a dome and run on a town",
    note: "Over two hundred people sat in a pod and spoke their dreams and fears aloud to an AI voice that spoke back as the building itself. Their eye movements and words were recorded, each story was summarised and written in Braille over close-up video of that person's iris, and the result was projected onto MIT's Great Dome for three nights in March 2025. Passers-by could point a phone at it and read the individual story. Structurally this is Istorya sang Bȧlatyagon: gather people, elicit personal narrative tied to a place, encode it into something public, let strangers navigate it. Farahi swapped the map for a building and photography for iris video.",
    also: "The Local Voices Network is the same operation without the artwork — facilitated in-person conversations in real towns, recorded, connected across distance, and opened as a listening channel for journalists and local leaders. Where Xyh's versions are geographic and arts-based, this one is civic and conversational."
  },
  {
    id: "eosforos-paracantora", featured: true, group: "opera-of-the-future",
    mine: ["eosforos", "avemaria", "radialpoetics"],
    them: "El Poema de la Fábrica Cósmica",
    who: "Nicole L'Huillier",
    src: [
      { label: "The project", url: "https://www.media.mit.edu/projects/el-poema-de-la-fabrica-c-smica/overview/" },
      { label: "L'Huillier's site", url: "https://nicolelhuillier.com/" }
    ],
    headline: "A listening ritual performed inside the machines physicists use",
    note: "The PARACANTORA is a device carrying environmental sensors whose readings are turned into sound in real time — synthesizers, samples, textures, words, other voices — producing a sonic imprint of one moment in one place, and treated in the work as a medium between worlds. The listening sessions were held inside the ALICE detector at CERN's Large Hadron Collider, at the ALMA Observatory in the Atacama Desert, and at the Paranal Observatory, also in the Atacama. Eosforos is a record about the earth's molten first age, performed inside an exhibition on chaos magic. Ave Maria, Gaia Mystica, from 2007, was built from recordings of stars, animals, earth and ice and played on a glass harmonica.",
    also: "This is also the radial poetics essay carried out rather than written: a detection instrument built for physics, used to make a ritual."
  },
  {
    id: "toys-afterglitch", featured: true, group: "future-sketches",
    mine: ["toys"],
    them: "After Glitch",
    who: "Zach Lieberman",
    src: [{ label: "After Glitch", url: "https://www.media.mit.edu/projects/after-glitch/overview/" }],
    headline: "He had to prune his way to fifty self-contained pages; Xyh has fifty by rule",
    note: "Lieberman kept seven years of experiments on a hosting platform called Glitch, whose appeal was that anything you made was immediately online. When he needed to get it all out, he exported everything and wrote a script to clean it up, discarding temporary tests, demonstrations of obsolete technology, and anything that needed a server to run. What survived was, in his words, about fifty projects that are self-contained and run entirely in the browser. That is the same shelf Xyh has — same size, same shape. He reached it by losing a platform and pruning backwards; Xyh's project rules require it from the start, so nothing has to be recovered.",
    also: null
  },
  {
    id: "physics-paradiso", featured: true, group: "responsive-environments",
    mine: ["physics", "aliquoto", "cella", "moire"],
    them: "A physics career and a wall of synthesizers",
    who: "Joseph A. Paradiso",
    src: [
      { label: "Paradiso", url: "https://en.wikipedia.org/wiki/Joseph_A._Paradiso" },
      { label: "His synthesizer, on video", url: "https://news.mit.edu/2012/video-paradiso-synthesizer-0314" },
      { label: "On his work across arts and science", url: "https://www.media.mit.edu/articles/how-joseph-paradiso-s-sensing-innovations-bridge-the-arts-medicine-and-ecology/" }
    ],
    headline: "Someone at the Lab has already lived this exact combination to the end",
    note: "Paradiso took a PhD in experimental high-energy physics at MIT in 1981, built particle detectors at CERN, and designed spacecraft control systems at Draper Lab. In parallel, starting as an undergraduate in 1973 with no electronics training, he taught himself from surplus parts and spent about fifteen years building what is probably the world's largest homemade modular synthesizer — over 125 modules, now in the MIT Museum. Neither half was a hobby. His group also runs Quantizer, which turns particle collision data into music.",
    also: "This is the one place in the survey where the physics degree and the synthesizers do not need to be explained to anybody."
  },
  {
    id: "desiderata-vocalvibrations", featured: true, group: "opera-of-the-future",
    mine: ["songs", "desiderata", "intermedia", "glossolalia", "breakfast", "xyhnthesizer", "mouthkit"],
    them: "Vocal Vibrations",
    who: "Tod Machover, Charles Holbrow, Elena Jessop and Rébecca Kleinberger",
    src: [{ label: "Vocal Vibrations", url: "https://www.media.mit.edu/projects/vocal-vibrations-expressive-performance-for-body-mind-wellbeing/overview/" }],
    headline: "The deepest overlap on this page, and the oldest",
    note: "Vocal Vibrations built two rooms: a chapel for listening to a vocal composition, and a cocoon for exploring your own voice alone. The underlying question was whether singing changes mental and physical state through physical vibration rather than through mood. This is where Xyh has the most to put beside a Media Lab project, and the most history — a songwriting career going back to 2009, an album made only from manipulated voice and breath, a paper taking one of those songs apart to show how words and music decide each other, a piece on speaking in tongues, spoken word poems, an instrument sampled entirely from Xyh's own voice, and a tool that chops speech into its individual sounds.",
    also: "Kleinberger, who came out of this group, describes her subject as the voice beyond words — within a person, between people, and across species. Everything in the left-hand column is a different answer to that same description."
  },
  {
    id: "cytophone-tidmarsh", featured: false, group: "responsive-environments",
    mine: ["cytophone", "kikik", "avemaria"],
    them: "Tidmarsh Living Observatory, SensorChimes, Doppelmarsh, BuzzCam",
    who: "Joseph A. Paradiso's group",
    src: [
      { label: "Tidmarsh Living Observatory", url: "https://www.media.mit.edu/projects/tidmarsh-living-observatory-portal/overview/" },
      { label: "Doppelmarsh", url: "https://www.media.mit.edu/projects/doppelmarsh/overview/" },
      { label: "BuzzCam", url: "https://www.media.mit.edu/projects/buzzcam/overview/" }
    ],
    headline: "Listening to an ecosystem as an instrument rather than as a measurement",
    note: "Tidmarsh is a 250-acre wetland in Massachusetts being restored, wired throughout with sensors that stream sound and environmental data continuously. SensorChimes turns that live data into music — a composer sets up the mapping and the landscape plays it — and is described by the group as a canvas for artists. Doppelmarsh lets you walk or fly through the same data rendered as three-dimensional sound. Nearby projects listen for bees and for whole habitats.",
    also: "Xyh has been doing this at three different scales. Cytophone works at the size of cells and plant tissue. kíkik listens for the moments a sound begins and hands those moments to a swarm that behaves like a colony. Ave Maria, Gaia Mystica did it in 2007, before any of the rest, out of recordings of stars, animals, earth and ice — which makes it the earliest piece of this practice by nearly twenty years."
  },
  {
    id: "scent", featured: false, group: "tangible-media",
    mine: [],
    them: "The Anemoia Device, and Gamma SENSE",
    who: "Cyrus Clarke (Tangible Media) and Alexandra Rieger (Opera of the Future)",
    src: [
      { label: "The Anemoia Device", url: "https://www.media.mit.edu/projects/anemoia-device/overview/" },
      { label: "Press coverage", url: "https://www.dezeen.com/2026/01/27/anemoia-scent-memory-machine-mit/" },
      { label: "ORBIT", url: "https://www.media.mit.edu/projects/orbit-olfactory-response-baseline-identification-test/overview/" }
    ],
    headline: "Smell has two independent laboratories at the Lab, and one of them is about nostalgia",
    note: "The Anemoia Device takes a printed photograph, reads it with an AI, lets you shape the result with three dials, and blends a custom perfume from fifty base notes — sandalwood, pine forest, leather, old books, sand — pumped in one-second increments. It is named for anemoia: nostalgia for a time you never lived through. That is the exact feeling the vaporwave and hauntology communities Xyh helped build are organised around. Separately, Alexandra Rieger builds instruments that are also medical devices, including a scent instrument and an olfactory test used with Massachusetts General Hospital to detect dementia early.",
    also: "Xyh's listed skills include cosmetic and fragrance technology. It has two homes here, in different groups, both active."
  },
  {
    id: "gliese-room", featured: false, group: "opera-of-the-future",
    mine: ["gliese", "metachamber", "desiderata"],
    them: "Playing the Room, Spaces that Perform Themselves, HearThere",
    who: "Opera of the Future, and Responsive Environments",
    src: [
      { label: "Opera of the Future projects", url: "https://www.media.mit.edu/groups/opera-of-the-future/projects/" },
      { label: "Playing the Room", url: "https://www.media.mit.edu/projects/playing-the-room/overview/" },
      { label: "HearThere", url: "https://www.media.mit.edu/projects/hearthere/overview/" }
    ],
    headline: "The room treated as part of the instrument",
    note: "Several projects across two groups treat the acoustics of a space as material to compose with rather than as a container to correct for, including a machine-learning system for predicting how a room will sound. HearThere, in Paradiso's group, fixes virtual sounds to physical locations so they stay put as you walk.",
    also: "Gliese builds its room from physics, tracing sound rays through layered air rather than approximating the result. Metachamber goes further and makes the room answer to the recording: it looks ahead for the silences and fits each reverb tail to the gap it has to die in. Desiderata is what that sounds like used as material rather than as an effect."
  },
  {
    id: "interiority-cybersubin", featured: false, group: "cyborg-psychology",
    mine: ["interiority"],
    them: "Cyber Subin: Human-AI Co-Dancing",
    who: "Pat Pataranutaporn's group",
    src: [
      { label: "Cyber Subin", url: "https://www.media.mit.edu/projects/cyber-subin/overview/" },
      { label: "Cyborg Psychology projects", url: "https://www.media.mit.edu/groups/cyborg-psychology/projects/" }
    ],
    headline: "Asking what a machine partner is, from inside a specific culture rather than in general",
    note: "Cyber Subin builds choreography between dancers and generative AI characters, working from Thai classical dance rather than from a generic idea of movement. Xyh's published paper does the parallel thing in argument, using Japanese practices around robots and dolls to reframe what counts as a person in an exchange. The group also studies AI-induced false memories, emotional dependence on AI companions, and a project on people in relationships with chatbots.",
    also: "Of the three research pillars this group names, the third is collaboration with artists and humanities researchers on speculative work — an explicit opening for exactly this kind of writing."
  },
  {
    id: "web-poetics", featured: false, group: "future-sketches",
    mine: ["cornice", "deskarium", "w2xdx", "benzaiten", "coping", "aeropane", "kubocities", "dungeonsynth"],
    them: "FaceTerm, C-Trend Live, Aspen Movie Splat, Reviving Design by Numbers, On Reaction-Diffusion, Refraction",
    who: "Future Sketches",
    src: [
      { label: "Future Sketches projects", url: "https://www.media.mit.edu/groups/future-sketches/projects/" },
      { label: "Aspen Movie Splat", url: "https://www.media.mit.edu/projects/aspen-movie-splat/overview/" },
      { label: "Refraction", url: "https://www.media.mit.edu/projects/refraction/overview/" },
      { label: "On Reaction-Diffusion", url: "https://www.media.mit.edu/projects/on-reaction-diffusion/overview/" }
    ],
    headline: "A group whose stated method is going back to old computing to find unused futures",
    note: "The group describes its sketches as a way of engaging with the past to suggest different possible futures. In practice: rebuilding a 1970s interactive map as a modern 3D scan, restoring John Maeda's 1999 programming environment in JavaScript, running live webcam feeds through a video synthesizer design from the 1970s, turning visitors into text characters. That is the same operation as W2XDX's invented television standard, Cornice and Deskarium drawn in text characters, KuboCities in 1990s web style, and the dungeon synth paper on a genre that reconstructs a medieval past that never happened.",
    also: null
  }
];
