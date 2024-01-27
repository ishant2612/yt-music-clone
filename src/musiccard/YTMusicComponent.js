import React, { useState, useEffect } from "react";
import YTMusic from "ytmusic-api";

const YTMusicComponent = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ytmusic = new YTMusic();
      await ytmusic.initialize(/* Optional: Custom cookies */);

      try {
        const fetchedSongs = await ytmusic.search("Never gonna give you up");
        setSongs(fetchedSongs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Songs</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <strong>{song.title}</strong> by {song.artist} - {song.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YTMusicComponent;
