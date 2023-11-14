import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {
    const [show, handleShow] = useState(false);
   useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
      <div className={`nav_wrapper ${show && "nav_black"}`}>
          <img onClick className='banner_nav' src='https://pageflows.imgix.net/media/logos/netflix.jpg?auto=compress&ixlib=python-1.1.2&s=e878f7ea0f9899b24790ef938efa60e6' alt='Netflix Logo' />
          <img className='Avatar'src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Avatar'/>
    
    </div>
  )
}

export default Nav
