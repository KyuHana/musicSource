import React from 'react';
import '../Css/introduction.css';
import More from '../Component/More';

function Introduction() {
  return (
    <div className='mainBox'>
      <div className='introDiv'>
        <span>Fsource는 함께 만들어가는 음원 공유 플랫폼입니다</span>
        <span style={{fontSize:'18px'}}>
          많은 사람들과 공유하고 싶은 음원들을 올려 서로 공유해보세요
        </span>
      </div>
      <div className='storeOwn'>
        <span>Fsource 가입</span>
        <span style={{fontSize:'18px', marginBottom:'20px'}}>
          지금 가입하여 원하는 음원을 저장하고 사용해보세요
        </span>
        <More name={'가입하기'}/>
      </div>
    </div>
  )
}

export default Introduction
