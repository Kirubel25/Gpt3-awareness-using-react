import React from 'react'
import './possibility.css'
import possiblityImage from '../../assets/possibility.png'

const Possiblity = () => {
  return (
    <div className='gpt3__possibility section__padding'>
      <div className="gpt3__possibility-image">
        {/* <h1>Image</h1> */}
        <img src={possiblityImage} alt="possibilities" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradiant__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possiblity