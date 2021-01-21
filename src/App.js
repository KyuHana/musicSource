import React, {useState, useMemo} from 'react';
import './Css/app.css';
import HotKeyWordPage from './Component/HotKeyWordPage.js';
import MainNav from './Component/mainNav.js';
import Introduction from './Component/introduction.js';
import FmusicContentBox from './Component/FmusicContentBox'

function App() {
  
  const [option,setOption] = useState([
    {
      uniqueId: 1,
      optionName: '음악',

    },
    {
      uniqueId: 2,
      optionName: '움짤',

    },
  ])
  return(
      <div className='wholeBody'>
        <nav>
          <MainNav />
        </nav>
        <header>
          <Introduction />
        </header>
        <div className='mainOptionBar'>
          <h1>
            {option[0].optionName}
          </h1>
          <h4 onClick= {
              () => {
                  setOption([...option].reverse());
                }
              }
          >
            {option[1].optionName}
          </h4>
        </div>
        
        <div className='FmusicContentBox'>
              <FmusicContentBox />
        </div>
      </div>
    );
  }

export default App;
