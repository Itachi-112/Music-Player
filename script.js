const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Humble",
    artist: "Kendrick Lamar",
    duration: "2:57",
    src: "https://aac.saavncdn.com/717/ee372af8abdc814bd36627ef93b097e9_160.mp4",
  },
  {
    id: 1,
    title: "Luka Chhipi",
    artist: "Seedhe Maut",
    duration: "2:21",
    src: "https://aac.saavncdn.com/745/aed42f188625973c18b8fbf0902429af_160.mp4",
  },
  {
    id: 2,
    title: "Phero Na Najariya",
    artist: "Amit Trivedi",
    duration: "3:59",
    src: "https://aac.saavncdn.com/440/9a7329d4c4419cb518396bcfcdbf7db1_160.mp4",
  },
  {
    id: 3,
    title: "Ghodey Pe Sawar",
    artist: "Amit Trivedi",
    duration: "3:13",
    src: "https://aac.saavncdn.com/440/948068f8dbcfc72a7b23fb18f3f3c235_160.mp4",
  },
  {
    id: 4,
    title: "Itti Si",
    artist: "Nanku, Natiq",
    duration: "3:15",
    src: "https://aac.saavncdn.com/043/1d35b20ae4baaebdca95c5886279d593_160.mp4",
  },
  {
    id: 5,
    title: "TT",
    artist: "Seedhe Maut",
    duration: "1:57",
    src: "https://aac.saavncdn.com/419/6792df347a88201cc8c2839b9db5de44_160.mp4",
  },
  {
    id: 6,
    title: "Ghanti",
    artist: "Sammad",
    duration: "2:33",
    src: "https://aac.saavncdn.com/653/ffcb7a5db29ff64c9ddd47062cbadd29_160.mp4",
  },
  {
    id: 7,
    title: "Pyaar?",
    artist: "Naam Sujal",
    duration: "3:25",
    src: "https://aac.saavncdn.com/116/eddade3f0e58dbb97bb3fe6dccc9fecf_160.mp4",
  },
  {
    id: 8,
    title: "Choo Lo",
    artist: "The Local Train",
    duration: "3:53",
    src: "https://aac.saavncdn.com/111/09c5dba8ec03665a9a679e19338917a6_160.mp4",
  },
  {
    id: 9,
    title: "Batti",
    artist: "Seedhe Maut",
    duration: "3:O8",
    src: "https://aac.saavncdn.com/983/124be96af5751baae760dd8b036a5212_160.mp4",
  },
  {
    id: 10,
    title: "Bhussi",
    artist: "KSHMR",
    duration: "3:O4",
    src: "https://aac.saavncdn.com/496/7a1b63475a00d86616aa1d51effbff09_160.mp4",
  },
  {
    id: 11,
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    duration: "4:34",
    src: "https://aac.saavncdn.com/974/4a0d062679a537a93da367a9e4b6e3cb_160.mp4",
  },
  {
    id: 12,
    title: "Dehshat Ho",
    artist: "Raftaar",
    duration: "3:15",
    src: "https://aac.saavncdn.com/236/4075c0d6e553e6508d2c0d158b271454_160.mp4",
  },
  {
    id: 13,
    title: "Mujhe Tum Nazar Se",
    artist: "Mehdi Hassan",
    duration: "3:53",
    src: "https://aac.saavncdn.com/075/3cb3f076ef4425c484851f953a5db541_160.mp4",
  },
  {
    id: 14,
    title: "Farq Hai",
    artist: "Suzonn",
    duration: "3:O4",
    src: "https://aac.saavncdn.com/748/246c5fb2c0ae284c207c40b616fda1b7_160.mp4",
  },
  {
    id: 15,
    title: "Nakhre",
    artist: "MC Amrit",
    duration: "2:56",
    src: "https://aac.saavncdn.com/172/08730bca3f318278875e660f11ed92bb_160.mp4",
  },
  {
    id: 16,
    title: "Asal G",
    artist: "Seedhe Maut",
    duration: "3:41",
    src: "https://aac.saavncdn.com/745/4f1542b2e55df51c295f6ff9ba62f259_160.mp4",
  },
  {
    id: 17,
    title: "Shaandaar",
    artist: "Sammad",
    duration: "2:33",
    src: "https://aac.saavncdn.com/796/6cb1a188cf169da1d4ba6191b16a65fc_160.mp4",
  },
  {
    id: 18,
    title: "TAIRNA",
    artist: "The Siege",
    duration: "2:32",
    src: "https://aac.saavncdn.com/003/23b261f8233448ed8853c50864394c7b_160.mp4",
  },
  {
    id: 19,
    title: "Aaoge Tum Kabhi",
    artist: "The Local Train",
    duration: "5:13",
    src: "https://aac.saavncdn.com/111/d4df22cec4d008f0a0b55f5b3ce6bf66_160.mp4",
  },
  {
    id: 20,
    title: "Stan",
    artist: "Eminem",
    duration: "6:43",
    src: "https://aac.saavncdn.com/221/80d7972eb148300af329a5f53dd382fb_160.mp4",
  },
   {
    id: 21,
    title: "Godzilla",
    artist: "Eminem",
    duration: "3:31",
    src: "https://aac.saavncdn.com/830/e17defe16f9e3eda8895f83cb4676ab5_160.mp4",
  },
   {
    id: 22,
    title: "meet the grahams",
    artist: "Kendrick Lamar",
    duration: "6:32",
    src: "https://aac.saavncdn.com/943/a9fc25ea09b07b77854e7a998c7f5e58_160.mp4",
  },
];

const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  audio.play();
   playButton.style.display = "none";
  pauseButton.style.display = "block";
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  
  playButton.classList.remove("playing");
  audio.pause();
   pauseButton.style.display = "none";
    playButton.style.display = "block";
};

const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];

    playSong(nextSong.id);
  }
 
};

const playPreviousSong = () => {
   if (userData?.currentSong === null) return;
   else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];

    playSong(previousSong.id);
   }
};

const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  userData.currentSong = null;
  userData.songCurrentTime = 0;

  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
};

const deleteSong = (id) => {
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    pauseSong();
    setPlayerDisplay();
  }

  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs); 
  highlightCurrentSong(); 
  setPlayButtonAccessibleText(); 

  if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");

    resetButton.id = "reset";
    resetButton.ariaLabel = "Reset playlist";
    resetButton.appendChild(resetText);
    playlistSongs.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
      userData.songs = [...allSongs];

      renderSongs(sortSongs()); 
      setPlayButtonAccessibleText();
      resetButton.remove();
    });

  }

};

const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;

  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};

const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });

  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

const renderSongs = (array) => {
  const songsHTML = array
    .map((song)=> {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
      </li>
      `;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;
};

const setPlayButtonAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];

  playButton.setAttribute(
    "aria-label",
    song?.title ? `Play ${song.title}` : "Play"
  );
};

const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);

playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click",  pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

shuffleButton.addEventListener("click", shuffle);

audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

    if (nextSongExists) {
      playNextSong();
    } else {
      userData.currentSong = null;
      userData.songCurrentTime = 0;  
pauseSong();
setPlayerDisplay();
highlightCurrentSong();
setPlayButtonAccessibleText();

    }
});

const sortSongs = () => {
  userData?.songs.sort((a,b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });

  return userData?.songs;
};

renderSongs(sortSongs());
setPlayButtonAccessibleText();
