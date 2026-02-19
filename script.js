const stories = [
  {
    title: "Super Zene",
    thumbnail: "https://AlexEmperor998.github.io/Emperor_FM/story1.jpg",
    episodes: [
      { name: "Veer Rahena", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%201.m4a" },
      { name: "Company", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%202.m4a" },
      { name: "Sunahra Kavach", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%203.m4a" },
      { name: "Doctor Khurana", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%204.m4a" },
      { name: "Titan Ki Khoj", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%205.m4a" },
      { name: "Kale Crystal Ki Shakti", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%206.m4a" },
      { name: "Sanki Aur Furtile Tidde", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%207.m4a" },
      { name: "Furtile Tiddon Ka Safaya", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%208.m4a" },
      { name: "Gangadhar Hi Shaktimaan Hai", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%209.m4a" },
      { name: "Grandmaster", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%2010.m4a" },
      { name: "Sacred blood Alion", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x11.m4a" },
      { name: "Sacred Bolld Gear", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x12.m4a" },
      { name: "Sunset point", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x13.m4a" },
      { name: "dollar", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x14.m4a" },
      { name: "dollar ki talash", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x15.m4a" },
      { name: "Naya mehaman", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x16.m4a" },
      { name: "Ansh ka khatma", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x17.m4a" },
      { name: "4 Crore", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x18.m4a" },
      { name: "Business partner", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x19.m4a" },
      { name: "Ghar wapasi", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x20.m4a" },
      { name: "Chamkile bichhoo", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x21.m4a" },
      { name: "Takshika gufa", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x22.m4a" },
      { name: "Awani se Mulaqat", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x23.m4a" },
      { name: "kaun hai woh?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x24.m4a" },
      { name: "6 crore", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x25.m4a" },
      { name: "EP 26", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x26.m4a" },
      { name: "EP 27", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x27.m4a" },
      { name: "EP 28", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x28.m4a" },
      { name: "EP 29", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x29.m4a" },
      { name: "EP 30", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x30.m4a" },
      { name: "EP 31", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x31.m4a" },
      { name: "EP 32", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x32.m4a" },
      { name: "EP 33", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x33.m4a" },
      { name: "EP 34", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x34.m4a" },
      { name: "EP 35", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x35.m4a" },
      { name: "EP 36", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x36.m4a" },
      { name: "EP 37", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x37.m4a" },
      { name: "EP 38", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x38.m4a" },
      { name: "EP 39", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x39.m4a" },
      { name: "EP 40", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x40.m4a" },
      { name: "EP 41", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x41.m4a" },
      { name: "EP 42", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x42.m4a" },
      { name: "EP 43", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x43.m4a" },
      { name: "EP 44", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x44.m4a" },
      { name: "EP 45", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x45.m4a" },
      { name: "EP 46", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x46.m4a" },
      { name: "EP 47", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x47.m4a" },
      { name: "EP 48", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x48.m4a" },
      { name: "EP 49", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x49.m4a" },
      { name: "EP 50", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x50.m4a" },
      { name: "EP 51", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x51.m4a" },
    ]
  },
  {
    title: "Super Yoddha",
    thumbnail: "https://AlexEmperor998.github.io/Emperor_FM/story2.jpg",
    episodes: [
      { name: "Ek Shart", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep1.m4a" },
      { name: "Jaduyi Angoothi", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep2.m4a" },
      { name: "Bazaar", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep3.m4a" },
      { name: "Ek Naye Din Ki Shuruaat", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep4.m4a" },
      { name: "Ek Aur Chunauti", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep5.m4a" },
      { name: "Dhamaaka", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep6.m4a" },
      { name: "Kathin Prasikshan", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep7.m4a" },
      { name: "Neelami", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep8.m4a" },
      { name: "Toofan", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep9.m4a" },
      { name: "Naqabposh", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep10.m4a" }
    ]
  },
  {
    title: "Millionaire",
    thumbnail: "https://AlexEmperor998.github.io/Emperor_FM/story3.jpg",
    episodes: [{ name: "Coming Soon", src: "" }]
  },
  {
    title: "The Warrior",
    thumbnail: "https://AlexEmperor998.github.io/Emperor_FM/story4.jpg",
    episodes: [{ name: "Coming Soon", src: "" }]
  },
  {
    title: "Story 5",
    thumbnail: "https://static.wixstatic.com/media/daf650_100844930ba14a5f8a901283413a897f~mv2.gif",
    episodes: [{ name: "Coming Soon", src: "" }]
  },
  {
    title: "Story 6",
    thumbnail: "https://static.wixstatic.com/media/daf650_100844930ba14a5f8a901283413a897f~mv2.gif",
    episodes: [{ name: "Coming Soon", src: "" }]
  }
  {
  title: "Story 7",
  thumbnail: "https://static.wixstatic.com/media/daf650_100844930ba14a5f8a901283413a897f~mv2.gif",
  episodes: [{ name: "Coming Soon", src: "" }]
},
];

const home = document.getElementById("home");
const playerSection = document.getElementById("playerSection");
const player = document.getElementById("audioPlayer");
const storyTitleDisplay = document.getElementById("storyTitleDisplay");
const episodeNameDisplay = document.getElementById("episodeNameDisplay");
const playerThumbnail = document.getElementById("playerThumbnail");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const totalDurationEl = document.getElementById("totalDuration");
const playPauseBtn = document.getElementById("playPauseBtn");
const episodeListEl = document.getElementById("episodeList");
const speedSelect = document.getElementById("speedSelect");

let currentStoryIndex = null;
let currentEpisodeIndex = 0;


function loadHome() {
  home.innerHTML = '<div class="story-grid"></div>';
  const grid = home.querySelector(".story-grid");

  stories.forEach((story, index) => {

    const card = document.createElement("div");
    card.className = "story-card";
    card.innerHTML = `
      <img src="${story.thumbnail}" alt="${story.title}" class="card-thumb">
      <h3>${story.title}</h3>
    `;
    card.onclick = () => openStory(index);
    grid.appendChild(card);

    // Story 4 ke baad Ad
    if (index === 3) {

      const adContainer = document.createElement("div");
      adContainer.className = "ad-container";
      grid.appendChild(adContainer);

      // Proper Script Injection
      const script1 = document.createElement("script");
      script1.type = "text/javascript";
      script1.text = `
        atOptions = {
          'key' : '52a6621e17223b5ce0bb93e8244fd49f',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;

      const script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.src = "https://www.highperformanceformat.com/52a6621e17223b5ce0bb93e8244fd49f/invoke.js";

      adContainer.appendChild(script1);
      adContainer.appendChild(script2);

      // Resume Card
      const resumeCard = document.createElement("div");
      resumeCard.className = "story-card resume-card";
      resumeCard.innerHTML = `
        <div class="resume-icon">▶</div>
        <h3>Resume Last Played</h3>
      `;
      resumeCard.onclick = resumeLast;
      grid.appendChild(resumeCard);
    }

  });
}
function openStory(index) {
  currentStoryIndex = index;
  currentEpisodeIndex = 0;
  
  const savedEpisode = localStorage.getItem(`last_ep_${index}`);
  if (savedEpisode !== null) {
    currentEpisodeIndex = parseInt(savedEpisode);
  }
  
  renderEpisodeList();
  playEpisode();
}

function playEpisode() {
  const story = stories[currentStoryIndex];
  const episode = story.episodes[currentEpisodeIndex];
  
  if (!episode || !episode.src) return;

  home.classList.add("hidden");
  playerSection.classList.remove("hidden");
  
  storyTitleDisplay.innerText = story.title;
  episodeNameDisplay.innerText = episode.name;
  playerThumbnail.src = story.thumbnail;
  player.src = episode.src;
  
  localStorage.setItem(`last_ep_${currentStoryIndex}`, currentEpisodeIndex);
  
  const savedTime = localStorage.getItem(`progress_${currentStoryIndex}_${currentEpisodeIndex}`);
  if (savedTime) {
    player.currentTime = parseFloat(savedTime);
  }
  
  player.play();
  playPauseBtn.innerText = "⏸";
  updateActiveEpisode();
}

function togglePlay() {
  if (player.paused) {
    player.play();
    playPauseBtn.innerText = "⏸";
  } else {
    player.pause();
    playPauseBtn.innerText = "▶";
  }
}

function changeTime(seconds) {
  player.currentTime += seconds;
}

function changeSpeed(speed) {
  player.playbackRate = parseFloat(speed);
}

function nextEpisode() {
  if (currentEpisodeIndex < stories[currentStoryIndex].episodes.length - 1) {
    currentEpisodeIndex++;
    playEpisode();
  }
}

function goHome() {
  player.pause();
  playerSection.classList.add("hidden");
  home.classList.remove("hidden");
}

function renderEpisodeList() {
  episodeListEl.innerHTML = "";
  const story = stories[currentStoryIndex];
  story.episodes.forEach((ep, idx) => {
    const li = document.createElement("li");
    li.className = "episode-item";
    li.innerHTML = `
      <span class="ep-num">${idx + 1}.</span>
      <span class="ep-name">${ep.name}</span>
      <button class="ep-play-btn">▶</button>
    `;
    li.onclick = () => {
      currentEpisodeIndex = idx;
      playEpisode();
    };
    episodeListEl.appendChild(li);
  });
}

function updateActiveEpisode() {
  const items = episodeListEl.querySelectorAll(".episode-item");
  items.forEach((item, idx) => {
    if (idx === currentEpisodeIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

player.ontimeupdate = () => {
  const current = player.currentTime;
  const duration = player.duration;
  if (!isNaN(duration)) {
    progressBar.max = duration;
    progressBar.value = current;
    currentTimeEl.innerText = formatTime(current);
    totalDurationEl.innerText = formatTime(duration);
    
    localStorage.setItem(`progress_${currentStoryIndex}_${currentEpisodeIndex}`, current);
    localStorage.setItem("last_story_index", currentStoryIndex);
  }
};

progressBar.oninput = () => {
  player.currentTime = progressBar.value;
};

player.onended = () => {
  nextEpisode();
};

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function resumeLast() {
  const lastStory = localStorage.getItem("last_story_index");
  if (lastStory !== null) {
    currentStoryIndex = parseInt(lastStory);
    const lastEp = localStorage.getItem(`last_ep_${currentStoryIndex}`);
    currentEpisodeIndex = lastEp !== null ? parseInt(lastEp) : 0;
    renderEpisodeList();
    playEpisode();
  } else {
    alert("No last played data found.");
  }
}

loadHome();
