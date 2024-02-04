import {useState,React,useEffect} from 'react'
import axios from 'axios';
import "./Home.css"
import test from "../src/images/download.jpg"


export const Home = () => {
 

  return (
    <div className='homepage-container'>
      <img  className='homepage-image' alt="image" src={test}/>
    
    </div>
  )
}
