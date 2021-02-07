import React from 'react';
import '../Css/soundeffect.css';
import SoundImage from '../Component/SoundImage';

function SoundEffect({content}) {
  return (
    <div className="soundEffectCon">
      {
        content.map((item) => {
          return (
            <SoundImage content={item} key={item.name} />
          );
        })
      }
    </div>
  )
}

export default SoundEffect
