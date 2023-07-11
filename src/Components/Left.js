import React from 'react'
import '../Style/Left.css'
import {FaEllipsisH} from 'react-icons/fa'
import {GiMusicSpell} from 'react-icons/gi'
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from './Menu';
import { MenuList } from './MenuList';
import { MenuPlaylist } from './MenuPlaylist';
import { TrackList } from './TrackList';

function Left() {
  return (
    <div className="Left">
      <div className="LogoContainer">
        <i> <GiMusicSpell /> </i>
        <h2>Music Forever</h2>
        <i> <FaEllipsisH /> </i>
      </div>
      <div className="SearchBox">
        <input type="test" placeholder='Search...' />
        <i> <BiSearchAlt /> </i>
      </div>
      <Menu title={'Menu'} menuObject={MenuList}/>
      <MenuPlaylist />
      <TrackList />
    </div>
  );
}

export {Left};