import React from 'react'
import { NavLink} from 'react-router'
import '../App.css'
import profilePic from '../assets/img.jpg'

const Home = () => {
  return (
    <div>
    
      <div className="container">
        <div className="row">
            <div className="col-6" >
                <h1 className='mb-4'> Hi,</h1>
                <h1 className='mb-4'> I'm <span className='text-primary'>Kalaivanan </span></h1>
                <h1 className='mb-4'> Full Stack Developer</h1>

                <button className='btn btn-primary'>Contact</button>
                <a href="/resume.pdf"  download="Kalaivanan_Resume.pdf" className="btn btn-primary" id="cv"> Download CV </a>                
            </div> 

            <div className="col-6 d-flex justify-content-center align-items-center">
                <img src={profilePic} alt="me" className='' style={{width:'450px',height:'450px',objectFit:"cover",borderRadius:"80px",marginLeft:'150px' }} />
            </div>          
        </div>

        <div className="col-4" id='footer'>
          <a href="https://www.linkedin.com/in/kalaivananeswaran/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"
                    style={{ width: "30px", height: "30px",border: 'none   ' }} /> </a>

           <a href="https://github.com/Kalaivanan-E" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" 
                    style={{ width: "30px", height: "30px",border: 'none   ',marginLeft:'20px' }} /> </a>

        </div>
        
      </div>
      
        
    </div>
  )
}
export default Home;









