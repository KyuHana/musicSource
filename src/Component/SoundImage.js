import React, {useState} from 'react';
import styled from 'styled-components';
import '../Css/musicContent.css';

import { faHeart, faPlay, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 

function SoundImage({content}) {

  return (
    <div>
      <div className='musicContent'>
        <img src={content.source}></img>
        <div className="onHoverIconCon">
          <div className="onHoverIconCon_inCon" >
            <FontAwesomeIcon className="icon" icon={faHeart} style={{backgroundColor:'orange', borderRadius:'10px', padding:'4px'}} color='white' size="lg" />
            <FontAwesomeIcon className="icon" icon={faPlay} style={{backgroundColor:'orange', borderRadius:'10px', padding:'4px'}} color='white' size="lg" />
            <FontAwesomeIcon className="icon" icon={faDownload} style={{backgroundColor:'orange', borderRadius:'10px', padding:'4px'}} color='white' size="lg" />
          </div>
        </div>
      </div>
      <div>
        {content.name}님의
      </div>
      <div>
        <span style={{color: 'orange'}}>영상 음원</span>
      </div>
    </div>
  )
}

export default React.memo(SoundImage);

/*
import React from 'react';
import '../Css/soundImage.css';

function SoundImage({content}) {
  return (
    <div style={{
      display:'flex',
      alignItems: 'center',
      }}
    >
      <div className='soundImage'>
        <img src={content.source} />
      </div> 
      <div>
        {content.name}님의
      </div>
      <div>
        <span style={{color: 'orange'}}>영상 음원</span>
      </div>
    </div>
  )
}

export default SoundImage
*/