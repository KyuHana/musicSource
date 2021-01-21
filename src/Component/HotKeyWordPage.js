import React, {useState} from 'react';
import '../Css/hotKeyWordPage.css';
import '../Component/HotKeyWord';
import HotKeyWord from '../Component/HotKeyWord';

function HotKeyWordPage({name, uniqueId}) {
    let topic;
    if(uniqueId == 1) {
        topic = [
            {
                name:'비올때 들을만한',
                id:1,
                group:1,
            }, 
            {
                name: '카페에서 들리는',
                id:2,
                group:1,
            },
            {
                name:'매드무비',
                id:3,
                group:1,
            },
            {
                name: '당황스러운',
                id:4,
                group:1,
            }
        ]; //객체로
    } else if(uniqueId == 2) {
        topic = [
            {
                name:'놀란',
                group:2,
            },
            {
                name:'격분의',
                group:2,
            },
            {
                name:'당황하는',
                group:2,
            },
            
        ]
    }
    
    return(
        <>
        <div className='mainTitle'>
            {
                topic.map((content, index)=>{
                    return(
                        <HotKeyWord content={content} key={index} />
                    );
                })
            }
        </div>
        </>
    );
}

export default React.memo(HotKeyWordPage);