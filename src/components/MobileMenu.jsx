import React, { useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll';
import { FaXmark } from "react-icons/fa6";

const MobileMenu = ({ menuOpen, setmenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    const handleClick = () => {
        setmenuOpen(!menuOpen);
    }

  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
    ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : ' h-0 opacity-0 pointer-events-none'}`}>

    <FaXmark 
        onClick={() => { setmenuOpen(false)}}
            className='absolute top-5 right-6 text-white text-2xl focus:outline-none cursor-pointer'
            aria-label='Close menu'
    />

                    <Link to='home' smooth={true} duration={500} onClick={() => setmenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0': "translate-y-5"}`}>Home</Link>
                    <Link to='about' smooth={true} duration={500} onClick={() => setmenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0': "translate-y-5"}`}>About</Link>
                    <Link to='project' smooth={true} duration={500} onClick={() => setmenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0': "translate-y-5"}`}>Projects</Link>
                    <Link to='contact' smooth={true} duration={500} onClick={() => setmenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0': "translate-y-5"}`}>Contact</Link>
                    
                    
                    
                    


    </div>
      )
}

export default MobileMenu
