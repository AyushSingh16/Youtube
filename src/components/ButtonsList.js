import React from 'react'
import Button from './Button'

const list = ['All', 'Gaming', 'Songs','Live','Soccer','Cricket','News','Cooking','Movie','Gadgets','Motivation','Love Songs'];

const ButtonsList = () => {
  return (
    <div className='flex' >
      {list.map((name,index) => (
          <Button key={index} name={name}/>
      ) )}
    </div>
  )
}

export default ButtonsList