import React, {useRef, useState} from 'react'

function Count({countNum1, dual}) {

  const [CountNum, setCountNum] = useState(0);
  let current = CountNum;
  let count = {
    countNum: function(){
      setTimeout(() => {
        setCountNum(current += 1);
        console.log(CountNum);
        if(current < countNum1) {
          count.countNum();
        }
      }, 10)
    } 
  }
  if(current < countNum1) {
    count.countNum();
  }
  return (
    CountNum
  )
}

export default Count
