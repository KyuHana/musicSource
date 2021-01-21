import React from 'react';
import '../Css/hotKeyWord.css';
import FmusicContentBox from '../Component/FmusicContentBox.js';

function HotKeyWord({content}) {  
    console.log(content);
    return(
        <div className='keyWordBox'>
            <span
                onClick={(e, content) => {
                    console.log(content);
                    return (
                    <FmusicContentBox content={content} />
                    );
                }} 
                className="keyWordTitle"
            >
                {content.name}
            </span>
        </div>
    );
    
}

export default HotKeyWord;