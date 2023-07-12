import React from 'react'
import "../Style/Left.css";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList } from "./PlayList";

function MenuPlaylist() {
  return (
    <div className='PlaylistContainer'>
        <div className='NameContainer'>
            <p>Playlist</p>
            <i> <FaPlus /> </i>
        </div>
        <div className='PlaylistScroll'>

            {PlayList && PlayList.map((list)=>(

                <div className='Plist' key={list.id}>

                    <i><BsMusicNoteList /></i>
                    <p>{list.name}</p>
                    <i><BsTrash /></i>

                </div>
                ))
            }
        </div>
    </div>
  )
}

export {MenuPlaylist};