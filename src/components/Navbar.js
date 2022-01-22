import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';



function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true)

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton=()=>{                 //function to display button on mobile
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true)
        }
    };

    // to make signup button disappear otherwise signup button appears everytime we refresh the page
    useEffect(()=>{          
        showButton()
    },[]);

    window.addEventListener('resize',showButton)
    return (
        <>
           <nav className="navbar">
              <div className="navbar-container">
                  <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                      LetzVibe <i class="fas fa-route"></i>
                    {/* TRVL <img src={logo} alt="Logo" width={30} height={25}/> */}
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}></i>
                  </div>
                  <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className="navitem">
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        
                    </li>
                    <li className="navitem">
                        <Link to="/services" className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        
                    </li>
                    <li className="navitem">
                        <Link to="/products" className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        
                    </li>
                    <li className="navitem">
                        <Link to="/signup" className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        
                    </li>
                  </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
              </div>
               </nav> 
        </>
    )
}

export default Navbar
