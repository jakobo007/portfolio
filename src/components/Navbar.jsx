import React, { useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll';
import { FaXmark } from "react-icons/fa6";

const Navbar = ({ menuOpen, setmenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    const handleClick = () => {
        setmenuOpen(!menuOpen);
    }

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
                <a href='' className='font-mono text-xl font-bold text-white'>
                    {''}
                    James<span className='text-blue-500' > Ouma</span>
                </a>

                {/* mobile */}

                <div 
                onClick={() => {setmenuOpen(!menuOpen)}}
                className='w-7 h-5 relative cursor-pointer z-40 md:hidden'>

                    <FaBars />

                </div>


                {/* desktop */}

                <div className='hidden md:flex items-center space-x-8'>
                    <Link to='home' smooth={true} duration={500}
                    className='text-gray-300 hover:text-white transition-colors cursor-pointer'>
                            Home
                    </Link>

                    <Link to='about' smooth={true} duration={500} offset={-100}
                        className='text-gray-300 hover:text-white transition-colors cursor-pointer'>
                        About
                        
                    </Link>
                    <Link to='project' smooth={true} duration={500} offset={-100}
                        className='text-gray-300 hover:text-white transition-colors cursor-pointer'>
                            Projects
                    </Link>
                    <Link to='contact' smooth={true} duration={500}
                        className='text-gray-300 hover:text-white transition-colors cursor-pointer'>
                            Contact
                    </Link>
                    
                    

                </div>



            </div>
        </div>
    </nav>
  )
}

export default Navbar
