import React from 'react'
import ButtonsList from './ButtonsList'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 py-2 m-1 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button