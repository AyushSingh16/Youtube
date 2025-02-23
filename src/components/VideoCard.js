import React from 'react'

const VideoCard = ({info}) => {
   
    // if (!info || !info.snippet) {
    //     return <div>Loading...</div>; // Handle cases where info is undefined
    // }
        const {snippet, statistics} = info; 
        const {title, channelTitle, thumbnails} = snippet;

  return (
    <div className='m-2 p-2 w-72 shadow-lg transform transition duration-500 hover:scale-105 -z-[10]'>
        <img className='rounded-lg' alt='thumbnails' src={thumbnails?.medium?.url} />
        <ul>
            <li className='font-bold py-2' >{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard