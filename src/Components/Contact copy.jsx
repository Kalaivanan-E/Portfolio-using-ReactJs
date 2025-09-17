
import React from 'react'

 const Contact = () => {
  return (
    <section className='contact py-5'>
      <div className="container">
        <h2 className='text-center fw-bold text-primary' 
        style={{color:'blue',fontSize:"32px",marginBottom:'50px',fontWeight:'bold'}}> Contact</h2>
        <div className="row" >
         {/* <div className="col-8 ml-4"> */}
          <form>
            <div className='form-group' style={{marginLeft:'400px'}}>
              <input type="text" placeholder='Name'  className='form-control' style={{width:'200%'}} />
            </div>

            <div className='form-group' style={{marginLeft:'400px',marginTop:'40px'}}>
              <input type="email" placeholder='Email'  className='form-control' style={{width:'200%'}} />
            </div>

            <div className='form-group' style={{marginLeft:'400px',marginTop:'40px'}}>
            <textarea className='form control' style={{width:'200%',borderRadius:'8px'}}></textarea>
            </div>            

          </form>
         {/* </div> */}
        </div>
      </div>

    </section>
  )
}

export default Contact;
