import React from 'react'
import "./Statsbar.css"

export default function Statsbar() {
  return (
    <div className='stats-bar-background'>
      <div className="stats-bar">
        <h2>Join Our Thousands of Satisfied Travelers!</h2>
        <div className="stats">
          <div className="stat">
            <h1>9k+</h1>
            <p>Total Travelers</p>
          </div>
          <div className="stat">
            <h1>1.1k</h1>
            <p>Total Trips</p>
          </div>
          <div className="stat">
            <h1>4.9/5</h1>
            <p>Travelers Satisfaction rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}
