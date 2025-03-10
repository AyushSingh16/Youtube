import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;                                       //early return pattern

  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
          <li className='hover:bg-gray-200 rounded-lg transform transition duration-200 p-2'>
            <Link to="/">
              Home
            </Link>
          </li>
            <li className='hover:bg-gray-200 rounded-lg transform transition duration-200 p-2' >
            <Link to="">
              Shorts
            </Link>  
            </li>
            <li className='hover:bg-gray-200 rounded-lg transform transition duration-200 p-2'>
            <Link to="">Videos</Link>  
            </li>
            <li className='hover:bg-gray-200 rounded-lg transform transition duration-200 p-2'>
            <Link to="" >Live</Link>  
            </li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar