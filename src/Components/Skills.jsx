import React from 'react'

const Skills = () => {
  return (
    <div className='container mt-5'>
        <h2 className='text-center' style={{fontWeight:'bold'}}>My Skills</h2>
      <div>
        <h4>HTML / CSS</h4>
        <div className='progress'>
            <div className="progress-bar bg-success" role='progressbar' style={{width:'85%'}}> 85%</div>
        </div>
      </div>
      <div>
        <h4>JavaScript</h4>
        <div className="progress">
            <div className="progress-bar bg-info" role='progressbar' style={{width:'60%'}}></div>
        </div>
      </div>
    </div>
  )
}

export default Skills