import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import '../Css/mainNav.css';
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 

function MainNav(props) {
  return (
    <div className="navCon">
        <div className="navCon__Come">
        <FontAwesomeIcon 
            style={{
              width:'20',
              height:'20',
              marginRight: '10'
            }} 
            icon={faBars} size="2x" 
          />
          <span>가입하기</span>
          <span>나만의 저장소</span>
        </div>
        <span className='title'>FSource</span>
        <div className="navCon__Search">
        <FontAwesomeIcon 
          style={{
            width:'20',
            height:'20',
            marginRight: '10'
          }} 
          icon={faSearch} size="2x" 
          onClick={() => {
            props.history.push('/search')
          }}
          />
            
          
        </div>
    </div>
  )
}

export default withRouter(React.memo(MainNav))