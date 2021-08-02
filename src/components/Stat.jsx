import React from 'react'


export default function Stat({title,numbers}) {
  let numbersDisplay = numbers.length > 1?
                <ul style={{justifyContent:"center"}}>
                  {numbers.map(num=><li>{num}</li>)}
                </ul>:
                <h1>{numbers[0]}</h1>

  return (
    <div className="stat">
        <h4>{title}</h4>
        {numbersDisplay}
    </div>
  )
}
