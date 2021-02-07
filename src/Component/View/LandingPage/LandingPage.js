import React, {useState} from 'react';
import '../../../Css/app.css';
import '../../../Css/more.css';
import {withRouter} from 'react-router-dom';

import MainNav from '../../mainNav.js';
import FmusicContentBox from '../FmusicContentBox/FmusicContentBox'
import SubOptionBar from '../../View/SubOptionBar/SubOptionBar';
import CountSound from '../CountSound/CountSound';
import More from '../../More';
import Introduction from '../../Introduction';

function LandingPage(props) {

  const [option,setOption] = useState([
    {
      uniqueId: 1,
      optionName: '배경음악',
      
    },
    {
      uniqueId: 2,
      optionName: '효과음',

    },
  ]);

  return (
    <div style={{width:'100%'}} >
      <div className='wholeBody'>
        <nav>
          <MainNav />
        </nav>
        <header>
          <CountSound name={'배경'} dual={true} count={300} />
        </header> 
        <SubOptionBar />
        <div>
          <FmusicContentBox />
        </div>
        <div>
          <More name='더보기' />
        </div>
        
        <Introduction />
      </div>
    </div>
  );
}

export default withRouter(LandingPage)
