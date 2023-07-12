import React, { useState, useEffect } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Songs } from "./Songs";
import { MusicPlayer } from "./MusicPlayer";

function AudioList() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImg] = useState(Songs[0].imgSrc);
  const [auto, setAuto] = useState(false);

  const setMain = (songSrc , imgSrc) =>{
    setSong(songSrc);
    setImg(imgSrc);
  }

  useEffect(() => {
    const songs = document.querySelectorAll(".Songs");

    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    // console.log(allLi);
    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  function changeFav(id) {
    Songs.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
        console.log(id);
      }
    });
    setSongs([...songs]);
  }

  return (
    <div className="AudioList">
      <h2 className="Title">
        The list <span>{`${Songs.length} songs`}</span>
      </h2>

      <div className="SongsContainer">
        {Songs &&
          Songs.map((song, index) => (
            <div
              className="Songs"
              key={song?.id}
              onClick={() => setMain(song?.song, song?.imgSrc)}
            >
              <div className="Count">{`#${index + 1}`}</div>

              <div className="Song">
                <div className="ImgBox">
                  <img src={song?.imgSrc} alt=""/>
                </div>

                <div className="Section">
                  <p className="SongName">
                    {song?.songName}
                    <span className="SpanArtist"> {song?.artist} </span>
                  </p>

                  <div className="Hits">
                    <p className="Hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      95,481,902
                    </p>

                    <p className="Duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03.04
                    </p>

                    <div
                      className="Favourite"
                      onClick={() => changeFav(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} img={img} autoplay={auto} />

    </div>
  );
}

export { AudioList };
