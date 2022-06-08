import React, { useState, useEffect } from "react";
import songList from "./songs"
import styles from '../styles/Home.module.css'

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    getSongs(songList);
  }, []);

  const getSongs = songList => {
    setSongs(songList);
  };

  const bySearch = (song, search) => {
    if (search) {
      return song.name.toLowerCase().includes(search.toLowerCase());
    } else return song;
  };

  const filteredList = (songs, search) => {
    return songs.filter(song => bySearch(song, search));
  };

  return (
    <div className="App">
      <input
        type="search"
        placeholder="가수명 또는 노래 제목 입력"
        onChange={e => setSearch(e.target.value)}
      />
      {filteredList(songs, search).map(song => (
        <div key={song.id}>
          {song.singer} - {song.title} ({song.album})
        </div>
      ))}
    </div>
  );
}
