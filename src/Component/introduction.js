import React from 'react';
import styled from 'styled-components';
import '../Css/randomTopic.css';

function Introduction() {

  return(
    <div className='introCon'>
      <div className="introBg">
        <p>fsource는 상업적으로 이용가능한 소스들을 내놓습니다</p>
        <p>당신의 소스를 올릴수도 있습니다</p>
        <div className="drawUpCon">
          <div className="drawUpCon_in1">
            <div>지금</div>
          </div>
          <div className="drawUpCon_in2">
            <div className='drawUp'>
              올려보세요
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default React.memo(Introduction)