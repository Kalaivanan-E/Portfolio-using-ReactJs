import React from 'react'
import projectpic1 from '../assets/projectpic1.png'
import projectpic2 from '../assets/projectpic2.png'
import projectpic3 from '../assets/projectpic3.png'
import './Project.css'

const Project = () => {
  return (
    <>
      <section className='project py-5'>
        <h2 className='text-center fw-bold text-primary '
          style={{ fontSize: '32px', fontWeight: 'bold' , marginBottom:'50px' }}>
          Projects
        </h2>

        <div className="container" id='projectcard'>
          <div className="row g-4">
            
            {/* Project 1 */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectpic1} alt="project1" />
                <div className="card-body text-center">
                  <h5 className="card-title">Intrusion Detection System</h5>
                  <p className="card-text">Machine learning-based IDS to detect malicious network activities.</p>
                  <a href="https://github.com/Kalaivanan-E/Intrusion-Detection-System" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn btn-primary">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectpic2} alt="project2" />
                <div className="card-body text-center">
                  <h5 className="card-title">Speech to Text Converter</h5>
                  <p className="card-text">Converts spoken language into accurate written text using recognition APIs.</p>
                  <a href="https://github.com/yourusername/speech-to-text" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn btn-primary">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectpic3} alt="project3" />
                <div className="card-body text-center">
                  <h5 className="card-title">Personal Portfolio</h5>
                  <p className="card-text">A responsive portfolio website to showcase my skills and projects.</p>
                  <a href="https://github.com/Kalaivanan-E/Portfolio-using-ReactJs" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn btn-primary">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Project
