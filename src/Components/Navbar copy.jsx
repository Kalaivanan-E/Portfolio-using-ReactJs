import React from 'react'
import { NavLink } from 'react-router';


function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg border bg-primary' id='navbar'>
                <NavLink to='/index' className='navbar navbar-brand text-white' id='Logo'> Kalaivanan</NavLink>
                <div className=' navbar navbar ml-auto' style={{display:'flex',flex:'0.2'}}>
                    <ul className='navbar-nav' style={{columnGap:'30px'}}>
                        <li><NavLink to='index ' className='nav-link'> Home</NavLink></li>
                        <li><NavLink to='/about ' className='nav-link'> About</NavLink></li>
                        <li><NavLink to='/skills' className='nav-link'> Skills</NavLink></li>
                        <li><NavLink to='/project' className='nav-link'> Project</NavLink></li>
                        <li><NavLink to='/contact' className='nav-link'> Contact</NavLink></li>
                    </ul>
                </div>


            </nav>
        </div>
    );
}


export default Navbar;
