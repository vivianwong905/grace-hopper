// api url
const API_URL =
  "https://fsa-async-await.herokuapp.com/api/guided-practice/songs";

const songsContainerEl = document.getElementById("song-container");
const songsFormEl = document.getElementById("new-song-form");

  const fetchAllSongs  = async() => {
    try{
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    }catch (e) {
        console.error(e);
    }
  }

// render all songs - it has title, release date
  const renderAllSongs = (songLists) => {
    
    songsContainerEl.innerHTML = ""; //this is to create a clean slate - reset
    songLists.forEach((songs) => {
      const songsEl = document.createElement('div');
      songsEl.classList.add('songs-card');

      // render title of songs
      const songsHeading = document.createElement('h3');
      songsHeading.textContent = songs.title;

      //render release date
      const songsRelease = document.createElement('h4');
      songsRelease.textContent = songs.release_date;

      // append all to the songs div elements
      songsEl.append(
        songsHeading,
        songsRelease
      );
      songsContainerEl.appendChild(songsEl);
    });
  };


  // add one new song
  const addSong = async (songData) => {
    try {
      const data = await fetch(API_URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(songData)
      });

    }catch(error){
      console.error(error);
    }


  }

  async function init(){
  const songs = await fetchAllSongs();
  console.log(songs);
  renderAllSongs(songs);
  const songData = { title: "goodbye", release_date: "1966-01-01T00:00:00.000Z", 
  length: {hours: 3, minutes: 45},
  genre_id: 7, artist_id: 8
 };
  addSong(songData);
  }
  init();
