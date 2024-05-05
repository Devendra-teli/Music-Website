const music = new Audio('audio/1.mp3');

const songs = [
  {
    id: 1,
    songName: `Alone 1<br>
    <div class="subtitle">Marshmello 1</div>`,
    poster: "img/MarshmelloImg/1.jpg",
  },
  {
    id: 2,
    songName: `Alone 2<br>
    <div class="subtitle">Marshmello 2</div>`,
    poster: "img/MarshmelloImg/2.jpeg",
  },
  {
    id: 3,
    songName: `Alone 3<br>
    <div class="subtitle">Marshmello 3</div>`,
    poster: "img/MarshmelloImg/3.jpg",
  },
  {
    id: 4,
    songName: `Alone 4<br>
    <div class="subtitle">Marshmello 4</div>`,
    poster: "img/MarshmelloImg/4.jpg",
  },
  {
    id: 5,
    songName: `Alone 5<br>
    <div class="subtitle">Marshmello 5</div>`,
    poster: "img/MarshmelloImg/5.jpg",
  },
  {
    id: 6,
    songName: `Alone 6<br>
    <div class="subtitle">Marshmello 6</div>`,
    poster: "img/MarshmelloImg/6.jpg",
  },
  {
    id: 7,
    songName: `Alone 7<br>
    <div class="subtitle">Marshmello 7</div>`,
    poster: "img/MarshmelloImg/7.jpg",
  },
  {
    id: 8,
    songName: `Alone 8<br>
    <div class="subtitle">Marshmello 8</div>`,
    poster: "img/MarshmelloImg/8.jpg",
  },
  {
    id: 9,
    songName: `Alone 9<br>
    <div class="subtitle">Marshmello 9</div>`,
    poster: "img/MarshmelloImg/9.jpg",
  },
  {
    id: 10,
    songName: `Alone 10<br>
    <div class="subtitle">Marshmello 10</div>`,
    poster: "img/MarshmelloImg/10.png",
  },
  {
    id: 11,
    songName: `Alone 11<br>
    <div class="subtitle">Marshmello 11</div>`,
    poster: "img/MarshmelloImg/11.jpg",
  },
  {
    id: 12,
    songName: `Alone 12<br>
    <div class="subtitle">Marshmello 12</div>`,
    poster: "img/MarshmelloImg/12.webp",
  },
  {
    id: 13,
    songName: `Alone 13<br>
    <div class="subtitle">Marshmello 13</div>`,
    poster: "img/MarshmelloImg/13.jpg",
  }, {
    id: 14,
    songName: `Alone 14<br>
    <div class="subtitle">Marshmello 14</div>`,
    poster: "img/MarshmelloImg/14.jpg",
  },
  {
    id: 15,
    songName: `Alone 15<br>
    <div class="subtitle">Marshmello 15</div>`,
    poster: "img/MarshmelloImg/15.jpg",
  },
]


Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
})


// search box
let search_results = document.getElementsByClassName("search_results")[0];

songs.forEach(element => {
  const { id, songName, poster } = element;
  let card = document.createElement('a');
  card.classList.add('card');
  card.href = `#${id}`;

  card.innerHTML = `<img src="${poster}" alt="">
                        <div class="content">
                           ${songName}
                       </div>`

  search_results.appendChild(card);
})

let input = document.getElementById("searchSong");

input.addEventListener('keyup', () => {
  let input_value = input.value.toUpperCase();
  let items = search_results.getElementsByTagName('a');
  for (let i = 0; i < items.length; i++) {
    let as = items[i].getElementsByClassName('content')[0];
    let text_value = as.textContent || as.innerHTML;

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[i].style.display = 'flex';
    } else {
      items[i].style.display = 'none';
    }

    if (input.value == 0) {
      search_results.style.display = "none";
    } else {
      search_results.style.display = "";
    }
  }
})

// master play
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.remove("bi-pause-fill");
    masterPlay.classList.add("bi-play-fill");
  }
})

// unactive song playing icon
const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.remove("bi-pause-circle-fill");
    el.classList.add("bi-play-circle-fill");
  })
}

// unactive song playing background
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgba(105, 105, 105, .05)";

  })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
let download_music = document.getElementById('download_music');


// song card play after clicked
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {

  e.addEventListener('click', (el) => {
    index = el.target.id;
    music.src = `audio/MarshmelloAudio/${index}.mp3`;
    poster_master_play.src = songs[index - 1].poster;
    title.innerHTML = songs[index - 1].songName;
    download_music.href = `audio/MarshmelloAudio/${index}.mp3`;
    download_music.setAttribute('download', "h");


    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.backgroundColor = "rgba(105, 105, 105, .4)";

    makeAllplays();
    Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.remove('bi-play-circle-fill');
    Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.add('bi-pause-circle-fill');
  });
})

// song progress bar
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementById("dot");

music.addEventListener("timeupdate", () => {

  // progress time
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  sec1 = sec1 < 10 ? `0${sec1}` : sec1;

  let min2 = Math.floor(music_dur / 60);
  let sec2 = Math.floor(music_dur % 60);
  sec2 = sec2 < 10 ? `0${sec2}` : sec2;

  currentStart.innerText = `${min1}:${sec1}`;
  currentEnd.innerText = `${min2}:${sec2}`;


  // progress bar length
  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;

  bar2.style.width = `${progressBar}%`;
  dot.style.left = `${progressBar}%`;
})

// progress bar music update after seek bar click
seek.addEventListener("change", () => {
  music.currentTime = music.duration / 100 * seek.value;
})


// volume 
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;

  music.volume = vol_a / 100;

})


// back and next btn song change
let back = document.getElementById('back');
let next = document.getElementById('next');

// back btn song change function
back.addEventListener('click', () => {
  index -= 1;
  if (index < 1) {
    index = songs.length;
  }
  music.src = `audio/MarshmelloAudio/${index}.mp3`;
  poster_master_play.src = songs[index - 1].poster;
  title.innerHTML = songs[index - 1].songName;


  music.play();
  wave.classList.add("active1");
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1].style.backgroundColor = "rgba(105, 105, 105, .4)";

  makeAllplays();
  Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.remove('bi-play-circle-fill');
  Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.add('bi-pause-circle-fill');
})

// back btn song change function
next.addEventListener('click', () => {
  index++;
  if (index > songs.length) {
    index = 1;
  }
  console.log(index)
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = songs[index - 1].poster;
  title.innerHTML = songs[index - 1].songName;


  music.play();
  wave.classList.add("active1");
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1].style.backgroundColor = "rgba(105, 105, 105, .4)";

  makeAllplays();
  Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.remove('bi-play-circle-fill');
  Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.add('bi-pause-circle-fill');
})


// scrolling pop song
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementById("pop_song");

pop_song_right.addEventListener('click', () => {
  pop_song.scrollLeft += 200;
})

pop_song_left.addEventListener('click', () => {
  pop_song.scrollLeft -= 200;
})


// scrolling pop artists
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementById("item");

pop_art_right.addEventListener('click', () => {
  item.scrollLeft += 200;
})

pop_art_left.addEventListener('click', () => {
  item.scrollLeft -= 200;
})


// shuffle
let shuffle = document.getElementsByClassName("shuffle")[0];

shuffle.addEventListener('click', () => {
  let a = shuffle.innerHTML;
  switch (a) {
    case 'next':
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";
      break;
    case 'repeat':
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "random";
      break;
    case 'random':
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next";
      break;
  }
})


// next music function
const next_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `audio/MarshmelloAudio/${index}.mp3`;
  poster_master_play.src = songs[index - 1].poster;
  title.innerHTML = songs[index - 1].songName;


  music.play();
  wave.classList.add("active1");
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1].style.backgroundColor = "rgba(105, 105, 105, .4)";

  makeAllplays();
  Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.remove('bi-play-circle-fill');
  Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.add('bi-pause-circle-fill');
}

// repeat music function
const repeat_music = () => {
  index;
  music.src = `audio/MarshmelloAudio/${index}.mp3`;
  poster_master_play.src = songs[index - 1].poster;
  title.innerHTML = songs[index - 1].songName;


  music.play();
  wave.classList.add("active1");
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1].style.backgroundColor = "rgba(105, 105, 105, .4)";

  makeAllplays();
  Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.remove('bi-play-circle-fill');
  Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.add('bi-pause-circle-fill');
}

const random_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index = Math.floor((Math.random() * songs.length) + 1);
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = songs[index - 1].poster;
  title.innerHTML = songs[index - 1].songName;


  music.play();
  wave.classList.add("active1");
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[index - 1].style.backgroundColor = "rgba(105, 105, 105, .4)";

  makeAllplays();
  Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.remove('bi-play-circle-fill');
  Array.from(document.getElementsByClassName("playListPlay"))[index - 1].classList.add('bi-pause-circle-fill');
}

music.addEventListener('ended', () => {
  let b = shuffle.innerHTML;

  switch (b) {
    case 'repeat':
      repeat_music();
      break;
    case 'next':
      next_music();
      break;
    case 'random':
      random_music();
      break;
  }
})

// userInfo
let user = document.getElementById("user");
let userInfo = document.getElementById("userInfo");
user.addEventListener('click', () => {
  // console.log("user clicked");
  userInfo.classList.toggle("showUserInfo");
})