import React from 'react';
import '../Css/more.css';

function More({name}) {
  return (
    <div style={{width:'100%', marginTop:'20px'}}>
          <div className='showTitle'>
            {name}
          </div>
        </div>
  )
}

export default More
