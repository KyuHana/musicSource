import React, {useState} from 'react';
import styled from 'styled-components';
import '../Css/musicContent.css';
import { faHeart, faPlay, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 

function MusicContent({content}) {

  return (
    <div>
      <div className='musicContent'>
        <img src={content.source}></img>
        <div className="onHoverIconCon">
          <div className="onHoverIconCon_inCon" >
            <FontAwesomeIcon style={{backgroundColor:'orange', borderRadius:'10px', padding:'4px'}} className="icon" icon={faHeart} color="white" size="lg" />
            <FontAwesomeIcon style={{backgroundColor:'orange', borderRadius:'10px', padding:'4px'}} className="icon" icon={faPlay} color="white" size="lg" />
            <FontAwesomeIcon style={{backgroundColor:'orange', borderRadius:'10px', padding:'4px'}} className="icon" icon={faDownload} color="white" size="lg" />
          </div>
        </div>
      </div>
      <div style={{fontWeight: '6ㄷ00', overflowY:'auto', maxWidth:'179px', maxHeight:'40px'}}>
        {content.name} 카테고리
      </div>
      <div style={{overflow:'hidden', maxWidth:'179px'}}>
        <span style={{color: 'orange'}}>#</span>
      </div>
    </div>
    
  )
}

export default React.memo(MusicContent);