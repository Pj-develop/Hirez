import React from 'react'
import './first.css'
import Lottie from 'lottie-react';

export default function first() {
  return (
    <div className='Hero'>
        <div className="left">
            <strong>Unlock your Career <br/>Potential with <br/> Hirez!</strong>
            <form class="d-flex" role="search">
        <input type="text" className='search' />
        <button>s</button>
      </form>

        </div>
        <div className="right">
            
            <Lottie animationData={require('./hired.json')}/>
        </div>
    </div>
  )
}
