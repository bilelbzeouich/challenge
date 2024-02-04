import React from 'react'
import "./Newscard.css"


export const Newscard = ({newsdata}) => {
  
  return (
    <div className='card-container'>
        <div className='Newsimage-container'>
          <img className='news-image' src={newsdata.urlToImage}></img>
        </div>
        <div className='News-title'>{newsdata.title}</div>
        <div className='details-button'>
          <button className='button'>Read more</button>
        </div>
        
    </div>
  )
}
