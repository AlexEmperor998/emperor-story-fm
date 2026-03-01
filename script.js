let stories = [];

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
      <img src="${story.thumbnail}" class="card-thumb">
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
    
    if (index === 6) {
      const adContainer = document.createElement("div");
      adContainer.style.textAlign = "center";
      adContainer.style.margin = "15px 0";
      
      const script1 = document.createElement("script");
      script1.innerHTML = `
        atOptions = {
          'key' : '52a6621e17223b5ce0bb93e8244fd49f',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      const script2 = document.createElement("script");
      script2.src = "https://www.highperformanceformat.com/52a6621e17223b5ce0bb93e8244fd49f/invoke.js";

      adContainer.appendChild(script1);
      adContainer.appendChild(script2);

      grid.appendChild(adContainer);
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
