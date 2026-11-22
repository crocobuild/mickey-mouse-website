// ---------- Data ----------
const friends = [
  { emoji: "🐭", name: "Minnie Mouse", type: "friend", desc: "Mickey's sweetheart and best friend, known for her polka-dot bow." },
  { emoji: "🦆", name: "Donald Duck", type: "friend", desc: "Hot-tempered but loyal. Mickey's pal in countless adventures." },
  { emoji: "🐕", name: "Goofy", type: "friend", desc: "Clumsy, kind, and always laughing. Mickey's goofiest best friend." },
  { emoji: "🐶", name: "Pluto", type: "friend", desc: "Mickey's faithful pet dog, who doesn't speak but says a lot." },
  { emoji: "🦆", name: "Daisy Duck", type: "friend", desc: "Donald's girlfriend and a close friend of Minnie and Mickey." },
  { emoji: "🐴", name: "Horace Horsecollar", type: "friend", desc: "One of Mickey's earliest friends from the 1920s cartoons." },
  { emoji: "🐮", name: "Clarabelle Cow", type: "friend", desc: "Another early pal and a gossip-loving member of the gang." },
  { emoji: "🤖", name: "Toodles", type: "friend", desc: "The magical helper from Mickey Mouse Clubhouse who delivers Mouseketools." },
  { emoji: "😈", name: "Pete", type: "foe", desc: "Mickey's classic bully and longest-running enemy, since 1925." },
  { emoji: "🧙", name: "Mad Doctor", type: "foe", desc: "A spooky scientist who often traps Mickey in his lab." }
];

const shows = [
  { title: "Steamboat Willie", year: "1928", info: "The short film that made Mickey a star. It was one of the first cartoons with fully synchronized sound." },
  { title: "Fantasia", year: "1940", info: "Mickey stars in \"The Sorcerer's Apprentice,\" wearing the iconic blue wizard hat." },
  { title: "The Mickey Mouse Club", year: "1955–1959", info: "A children's variety show with the Mouseketeers, songs, and cartoons. It was a huge TV hit." },
  { title: "Mickey's Christmas Carol", year: "1983", info: "Mickey plays Bob Cratchit in this retelling of the Dickens classic with Scrooge McDuck." },
  { title: "The Prince and the Pauper", year: "1990", info: "Mickey plays both the prince and the poor boy who swap places." },
  { title: "The Three Musketeers", year: "2004", info: "Mickey, Donald, and Goofy star as the heroic trio in this animated adventure." },
  { title: "Mickey Mouse Works", year: "1999–2000", info: "A TV series of short cartoons featuring Mickey and his friends." },
  { title: "Disney's House of Mouse", year: "2001–2003", info: "Mickey runs a nightclub where classic Disney characters come to hang out." },
  { title: "Mickey Mouse Clubhouse", year: "2006–2016", info: "A popular preschool show where kids help Mickey solve problems with \"Oh, Toodles!\" and Mouseketools." },
  { title: "Mickey Mouse (Shorts)", year: "2013–2019", info: "Fast, funny, hand-drawn style shorts that bring back classic slapstick humor." },
  { title: "Mickey and the Roadster Racers", year: "2017–2021", info: "Mickey and friends race around the world in their cars." },
  { title: "Mickey Mouse Funhouse", year: "2021–present", info: "Mickey and friends explore a magical funhouse with new adventures in each room." }
];

const facts = [
  "Mickey's very first appearance in a film was in Plane Crazy, but Steamboat Willie was the first one released with sound.",
  "Walt Disney was Mickey's original voice, and he kept voicing him until 1947.",
  "Mickey was almost named Mortimer Mouse. Walt's wife Lillian suggested \"Mickey\" instead.",
  "Mickey got his own Hollywood Walk of Fame star in 1978.",
  "Mickey's round ears are made of simple circles, which made him easy and fast to animate.",
  "The 1928 version of Mickey entered the public domain in the U.S. on January 1, 2024.",
  "Mickey appeared in over 130 short films in his first decades.",
  "The Mickey Mouse Club had its own theme song with the famous M-I-C-K-E-Y spelling.",
  "Mickey became one of the first cartoon characters to appear in merchandise, with the first Mickey toy in the 1930s."
];

// ---------- Birthday note ----------
function showBirthday() {
  const born = 1928;
  const now = new Date();
  const age = now.getFullYear() - born;
  const bday = new Date(now.getFullYear(), 10, 18); // Nov 18
  const msPerDay = 24 * 60 * 60 * 1000;
  const days = Math.round((bday - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / msPerDay);
  let text;
  if (days === 0) {
    text = "🎉 Today is Mickey's birthday! He turns " + age + "! 🎉";
  } else if (days > 0) {
    text = "Mickey turns " + age + " in " + days + " day" + (days === 1 ? "" : "s") + ".";
  } else {
    text = "Mickey turned " + age + " this year on November 18.";
  }
  document.getElementById("birthday-note").textContent = text;
}

// ---------- Friends ----------
function renderFriends(filter) {
  const list = document.getElementById("friend-list");
  list.innerHTML = "";
  friends
    .filter(f => filter === "all" || f.type === filter)
    .forEach(f => {
      const card = document.createElement("div");
      card.className = "card " + f.type;
      card.innerHTML =
        f.emoji +
        '<h3>' + f.name + '</h3>' +
        '<span class="tag">' + (f.type === "friend" ? "Friend" : "Foe") + '</span>' +
        '<p>' + f.desc + '</p>';
      list.appendChild(card);
    });
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderFriends(btn.dataset.filter);
  });
});

// ---------- Shows ----------
function renderShows() {
  const list = document.getElementById("show-list");
  shows.forEach(s => {
    const item = document.createElement("div");
    item.className = "show";
    item.innerHTML =
      '<button class="show-title">' + s.title + '<span>' + s.year + '</span></button>' +
      '<div class="show-body">' + s.info + '</div>';
    item.querySelector("button").addEventListener("click", () => item.classList.toggle("open"));
    list.appendChild(item);
  });
}

// ---------- Fun facts ----------
let lastFact = -1;
document.getElementById("fact-btn").addEventListener("click", () => {
  let i;
  do { i = Math.floor(Math.random() * facts.length); } while (i === lastFact);
  lastFact = i;
  document.getElementById("fact-text").textContent = facts[i];
});

// ---------- Init ----------
showBirthday();
renderFriends("all");
renderShows();
