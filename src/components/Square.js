import React from 'react'

function Square(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
        <span className='text-3xl text-red-500 font-bold'>{props.value}</span>
    </div>
  )
}

export default Square