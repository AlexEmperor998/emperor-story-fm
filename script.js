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
      { name: "Grandmaster", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%2010.m4a" }
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
    thumbnail: "https://AlexEmperor998.github.io/Emperor_FM/story1.jpg",
    episodes: [{ name: "Coming Soon", src: "" }]
  },
  {
    title: "Story 6",
    thumbnail: "https://AlexEmperor998.github.io/Emperor_FM/story2.jpg",
    episodes: [{ name: "Coming Soon", src: "" }]
  }
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

    if (index === 3) {
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
