import React, {useState} from 'react';
import '../Css/hotKeyWord.css';
import FmusicContentBox from './View/FmusicContentBox/FmusicContentBox.js';

function HotKeyWord({changeIdNumber, content}) {  
    const titleClass = content.isClicked ? "keyWordColorTitle" : "keyWordTitle";
    return(
        <div className='keyWordBox' onClick={
            () => {
                changeIdNumber(content.id)
            }
        }>
            <span className={titleClass}>
                {content.name}
            </span>
        </div>
    );
    
}

export default HotKeyWord;