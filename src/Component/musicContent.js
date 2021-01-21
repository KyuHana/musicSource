import React from 'react';
import styled from 'styled-components';
import '../Css/musicContent.css';
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 

function musicContent({content}) {
  return (
    <div className='musicContent'>
      <img src={content.source}></img>
      
    </div>
  )
}

export default React.memo(musicContent);