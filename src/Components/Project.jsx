
import React from 'react'

 const Project = () => {
  return (
    <section className='project py-5'>
      <div className='container'>
        <h2 className='text-center fw-bold text-primary' style={{fontSize:'32px',fontWeight:'bold'}}>Project</h2>
       <div className="row">
        <div className="card" style={{width:'18rem',borderRadius:'10px'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeC0ScoTfXmoFPBXGi9aMFwLZ0cBmNbRK50w&s" alt="" />
          <div className="card-body">
            <h4 className='card-title'>Intrusion Detection System</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae accusamus maiores quasi sunt magnam corrupti et ipsa nobis ipsam.</p>
          </div>
        </div>
        <div className="card" style={{width:'18rem',borderRadius:'10px'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeC0ScoTfXmoFPBXGi9aMFwLZ0cBmNbRK50w&s" alt="" />
          <div className="card-body">
            <h4 className='card-title'>Intrusion Detection System</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae accusamus maiores quasi sunt magnam corrupti et ipsa nobis ipsam.</p>
          </div>
        </div>
       </div>
       
      </div>
    </section>
  )
}

export default Project;
