import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import '../../../Css/ViewCss/search.css';
import {faSearch, faBackspace} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import Count from '../../Count';

import SubOptionBar from '../../View/SubOptionBar/SubOptionBar';

function Search(props) {
  const findResult = (e) => {
    e.preventDefault();
    props.history.push('/searchResult');
  }

  return (
    <div className='wholebody'>
      <div className='searchCon'>
        <div className='searchCon__Icon'>
          <FontAwesomeIcon className='icon' icon={faSearch} size='lg' />
        </div>
        <div className='searchCon__searchOne'>
          <form onSubmit={findResult}>
            <input type='text' placeholder='많은 효과음과   배경음을 다운받으실 수 있습니다'/>
          </form>
        </div>
        <div className='searchCon__searchCancel'>
          <FontAwesomeIcon className='icon' icon={faBackspace}size='lg' />
        </div>
      </div>
    </div>
  )
}

export default withRouter(React.memo(Search))
