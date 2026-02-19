console.log("Lets write JavaScript");

let currentSong = new Audio();
let songs = [];
let currFolder;
let currentIndex = 0;

// Album folders (ADD HERE if you create new folder)
let albumFolders = [
  "seedhe_maut" ,
  "krsna" ,
  "Diljit",
  "karan_aujla",
  "Angry_(mood)",
  "Bright_(mood)",
  "Chill_(mood)",
  "cs",
  "Dark_(mood)",
  "Funky_(mood)",
  "Love_(mood)",
  "ncs"
];

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2,"0")}:${String(remainingSeconds).padStart(2,"0")}`;
}

async function getSongs(folder) {
  currFolder = folder;

  let response = await fetch(`songs/${folder}/`);
  let text = await response.text();

  let div = document.createElement("div");
  div.innerHTML = text;

  let anchors = div.getElementsByTagName("a");
  songs = [];

  for (let anchor of anchors) {
    if (anchor.href.endsWith(".mp3")) {
      let songName = decodeURIComponent(
        anchor.href.split(`songs/${folder}/`)[1]
      );
      songs.push(songName);
    }
  }

  let songUL = document.querySelector(".songList ul");
  songUL.innerHTML = "";

  songs.forEach((song, index) => {
    songUL.innerHTML += `
      <li>
        <img class="invert" width="34" src="img/music.svg">
        <div class="info">
          <div>${song}</div>
          <div>Sagar</div>
        </div>
      </li>`;
  });

  Array.from(document.querySelectorAll(".songList li")).forEach((e, index) => {
    e.addEventListener("click", () => {
      playMusic(songs[index]);
    });
  });

  return songs;
}

function playMusic(track, pause = false) {
  currentIndex = songs.indexOf(track);
  currentSong.src = `songs/${currFolder}/` + track;

  if (!pause) {
    currentSong.play();
    play.src = "img/pause.svg";
  }

  document.querySelector(".songinfo").innerHTML = track;
}

async function displayAlbums() {
  let cardContainer = document.querySelector(".cardContainer");
  cardContainer.innerHTML = "";

  for (let folder of albumFolders) {
    try {
      let res = await fetch(`songs/${folder}/info.json`);
      let data = await res.json();

      cardContainer.innerHTML += `
        <div data-folder="${folder}" class="card">
          <div class="play">▶</div>
          <img src="songs/${folder}/cover.jpg">
          <h2>${data.title}</h2>
          <p>${data.description}</p>
        </div>`;
    } catch (err) {
      console.log("Skipping album:", folder);
    }
  }

  Array.from(document.getElementsByClassName("card")).forEach(card => {
    card.addEventListener("click", async (e) => {
      let folder = e.currentTarget.dataset.folder;
      await getSongs(folder);
      if (songs.length > 0) playMusic(songs[0]);
    });
  });
}

async function main() {
  await displayAlbums();
  await getSongs("ncs");
  if (songs.length > 0) playMusic(songs[0], true);

  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "img/pause.svg";
    } else {
      currentSong.pause();
      play.src = "img/play.svg";
    }
  });

  previous.addEventListener("click", () => {
    if (currentIndex > 0) {
      playMusic(songs[currentIndex - 1]);
    }
  });

  next.addEventListener("click", () => {
    if (currentIndex < songs.length - 1) {
      playMusic(songs[currentIndex + 1]);
    }
  });

  currentSong.addEventListener("timeupdate", () => {

  let percent = (currentSong.currentTime / currentSong.duration) * 100;

  document.querySelector(".circle").style.left = percent + "%";

  document.querySelector(".songtime").innerHTML =
    `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
});

}

// Seekbar click jump fix
document.querySelector(".seekbar").addEventListener("click", (e) => {

  let seekbar = document.querySelector(".seekbar");

  let rect = seekbar.getBoundingClientRect();
  let offsetX = e.clientX - rect.left;
  let width = rect.width;

  let percent = offsetX / width;

  currentSong.currentTime = currentSong.duration * percent;
});

main();
