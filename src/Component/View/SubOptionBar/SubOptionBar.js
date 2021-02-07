import React, {useState} from 'react';
import HotKeyWordPage from '../../HotKeyWordPage.js';
import '../../../Css/ViewCss/subOptionBar.css';

function SubOptionBar() {
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
    <div className='subOptionBar'>
      <div className='subOptionBarConWidth'>
        <HotKeyWordPage uniqueId={option[0].uniqueId} />
      </div>
    </div>
  )
}

export default SubOptionBar
