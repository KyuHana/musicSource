import React from 'react';
import '../Css/EachCreatorMusic.css'; 

function EachCreatorMusic({content}) {
  return (
    <div className='EachCreatorMusicDiv'>
      <img src={content.source} />
      <div className='EachCreatorMusicDiv__inDiv'>
      <span>{content.name}님의</span>
      <span> 음원보러가기</span>
      </div>
    </div>
  )
}

export default EachCreatorMusic
