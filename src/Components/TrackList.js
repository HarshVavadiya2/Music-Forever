import React from 'react';
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa"; 
import Track from '../img/track.png'


function TrackList() {
  return (
    <div className='TrackList'>
        <div className='Top'>
            <img src={Track} alt=''/>
            <p>Sample name <span>Artist </span></p>
        </div>

        <div className='Bottom'>
            <i><BsFillVolumeUpFill /></i>
            <input type='range' />
            <i><BsMusicNoteList /></i>
            <i><FaDesktop /></i>
        </div>
    </div>
  )
}

export {TrackList};