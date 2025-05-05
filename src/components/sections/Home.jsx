import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
      viewport={{ once: false, amount: 0.5 }}
      id='home'
      className=' home min-h-screen flex items-center justify-center relative'>
      
        <div className='text-center z-10 px-4'>
          <h1 className='text-4xl md:text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text leading-right'>Hi, I'm James Ouma</h1>

          <p className='text-lg md:text-2xl text-gray-300 mb-8 max-w-lg mx-auto'>A passionate software developer with a knack for creating innovative solutions. My goal is to build solutions that offer exceptional performance and a delightful user experience.</p>

          <div className='flex justify-center space-x-4'>
            <Link to='project' smooth={true} duration={500} className='bg-blue-500 text-white cursor-pointer py-3 px-6 rounded font-medium transition realtive overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'>
            View Projects
            </Link>
            <Link to='contact' smooth={true} duration={500} className='border border-blue-500/50 text-blue-500 py-3 px-6 cursor-pointer rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:bg-blue-500/10]'>Contact Me</Link>
            
          </div>
        </div>

    </motion.div>
  )
}

export default Home
