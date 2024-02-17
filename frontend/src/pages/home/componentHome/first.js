import React from 'react'
import './first.css'
import Lottie from 'lottie-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function first() {
  return (
    <div className='Hero'>
        <div className="left">
            <strong>Unlock your Career <br/>Potential with <br/> Hirez!</strong>
            <form className="d-flex" role="search">
        <input type="text" className='search' />
        <button><svg xmlns="http://www.w3.org/2000/svg" width="35" style={{marginBottom:"25px"}} height="35" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
      </form>

        </div>
        <div className="right">
            
            <Lottie animationData={require('./hired.json')}/>
        </div>
    </div>
  );
}
