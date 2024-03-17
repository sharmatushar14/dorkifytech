import React from 'react';
import {AiOutlineArrowDown} from 'react-icons/ai';
import google from '../../assets/google_icon.png';
import './header.css';



const header = () => {
  return (
    <div className='app__header section__padding' id='home'>
      <div className='app__header-content'>
        <h1 className='gradient__text'>
          The Google Search Engine is an amazing machine ! </h1>
        <p>The Google Engine is a great way to Osint stuff about a particular domain and you can try all of it here.</p>
        <div className='app__header-content-down'>
         <a href="#brand"> <button><AiOutlineArrowDown /></button> </a> 
        </div>
      </div>
        <div className='app__header-image'>
          <img src={google} alt="Google Image" />
        </div>
    </div>
  )
}

export default header