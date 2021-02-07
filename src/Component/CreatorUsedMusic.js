import React from 'react';
import styled from 'styled-components';
import '../Css/randomTopic.css';
import EachCreatorMusicBox from './EachCreatorMusicBox';
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 

function CreatorUsedMusic() {
  return(
    <div className='introCon'>
      <div className="introBg">
        <EachCreatorMusicBox />
      </div>
    </div>
  )
}

export default React.memo(CreatorUsedMusic)