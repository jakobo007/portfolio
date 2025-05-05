import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';

const Projects = () => {

  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
      viewport={{ once: false, amount: 0.1 }}
      
      className='project min-h-screen flex items-center justify-center py-20'>
      
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Featured Projects</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          <div className='p-6 rounded-xl border cursor-pointer border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all'>
          <h3 className='text-xl font-bold mb-2'>E-Learn</h3>
          <p className='text-gray-400 mb-4'>School website for people interested or already learning german. It's main goal was to communicate to the users and register interested users. It's still in development as more features will be intergrated in the future.</p>
          <div className='flex flex-wrap gap-2 mb-4'>
          {['React', 'Tailwindcss', 'Framer Motion', 'EmailJS'].map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    {tech}
                  </span>
                ))}
          </div>

          <div>
            <a href="https://jakobo007.github.io/e-learn/" target='_blank' className='text-blue-400 hover:text-blue-300 transition-colors my-4 inline-flex items-center gap-2 justify-center'>View Project<FaArrowRight /></a>
          </div>

          </div>

          <div className='p-6 rounded-xl border cursor-pointer border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all'>
          <h3 className='text-xl font-bold mb-2'>Cloud Platform</h3>
          <p className='text-gray-400 mb-4'>Scalable cloud insfrastructure management with real-time monitoring and automated scaling</p>
          <div className='flex flex-wrap gap-2 mb-4'>
            {['React', 'Node.js', 'AWS', 'Docker'].map((tech, key) =>{
              <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
                {tech}
              </span>
            })}
          </div>
          <div>
            <a href="" className='text-blue-400 hover:text-blue-300 transition-colors my-4 inline-flex items-center gap-2 justify-center'>View Project<FaArrowRight /></a>
          </div>
          </div>

          <div className='p-6 rounded-xl border cursor-pointer border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all'>
          <h3 className='text-xl font-bold mb-2'>Cloud Platform</h3>
          <p className='text-gray-400 mb-4'>Scalable cloud insfrastructure management with real-time monitoring and automated scaling</p>
          <div className='flex flex-wrap gap-2 mb-4'>
            {['React', 'Node.js', 'AWS', 'Docker'].map((tech, key) =>{
              <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
                {tech}
              </span>
            })}
          </div>
          <div>
            <a href="" className='text-blue-400 hover:text-blue-300 transition-colors my-4 inline-flex items-center gap-2 justify-center'>View Project<FaArrowRight /></a>
          </div>
          </div>

          <div className='p-6 rounded-xl border cursor-pointer border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all'>
          <h3 className='text-xl font-bold mb-2'>Cloud Platform</h3>
          <p className='text-gray-400 mb-4'>Scalable cloud insfrastructure management with real-time monitoring and automated scaling</p>
          <div className='flex flex-wrap gap-2 mb-4'>
            {['React', 'Node.js', 'AWS', 'Docker'].map((tech, key) =>{
              <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition'>
                {tech}
              </span>
            })}
          </div>
          <div>
            <a href="" className='text-blue-400 hover:text-blue-300 transition-colors my-4 inline-flex items-center gap-2 justify-center'>View Project<FaArrowRight /></a>
          </div>
          </div>



        </div>

      </div>

    </motion.div>
  )
}

export default Projects
