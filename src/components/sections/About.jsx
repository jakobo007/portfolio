import React from 'react'
import { motion } from 'framer-motion';

const About = () => {

  const frontendSkills = ['React', 'Css/Tailwind', 'JavaScript', 'HTML', 'Next.js', 'Redux', 'TypeScript'];

  const backendSkills = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Firebase', 'RESTful APIs'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
      viewport={{ once: false, amount: 0.5 }}
      id='about'
      className='about min-h-screen flex items-center justify-center py-20'>

      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>
        <div className='rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all glass'>
          <p className='text-gray-300 mb-6'>
            Hello! I'm James Ouma, a passionate software developer with a strong interest in creating innovative solutions. I have experience in various programming languages and frameworks, and I'm always eager to learn new technologies. My goal is to build applications that not only perform exceptionally well but also provide a delightful user experience.
          </p>

          {/* Frontend */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover"-translate-y-1 transition-all hover:border-blue-500/30'>
              <h3 className='text-xl font-bold mb-4'>Frontend</h3>
              <div className='flex flex-wrap gap-2'>
                {frontendSkills.map((tech, key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    {tech}
                  </span>
                ))} 
              </div>
            </div>

                {/* Backend */}
            <div className='rounded-xl p-6 hover"-translate-y-1 transition-all hover:border-blue-500/30'>
              <h3 className='text-xl font-bold mb-4'>Backend</h3>
              <div className='flex flex-wrap gap-2'>
                {backendSkills.map((tech, key) => (
                  <span
                  key={key}
                  className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    {tech}
                  </span>
                ))}  
              </div>
            </div>

          </div>


          <div className='grid gird-cols-1 md:grid-cols-2 gap-6 mt-8'>

            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30'>
            <h3 className='text-xl font-bold mb-4 inline-flex items-center gap-2'><img width="48" height="48" src="https://img.icons8.com/emoji/48/school-emoji.png" alt="school-emoji"/> Education</h3>
            <ul className='list-disc list-inside text-gray-300 space-y-2'>
              <li>
                <strong>B.S in Computer Science </strong> - XYZ University
              </li>
              <li>
                Relative Coursework, Web Development, Cloud Computing...
              </li>
            </ul>
            </div>

            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-a;ll hover:border-blue-500/30'>
            <h3 className='text-xl font-bold mb-4 inline-flex items-center gap-2'><img width="40" height="40" src="https://img.icons8.com/office/40/office.png" alt="office"/> Work Experience</h3>
            <div className='space-y-4 text-gray-300'>

              <div className=''>
                <h4 className='font-semibold'>Software Engineer at ABC Corp (2020 - Present)</h4>
                <p className='text-gray-400'>Developed and maintained web applications using React and Node.js.</p>
              </div>

              <div className=''>
                <h4 className='font-semibold'>Software Engineer at ABC Corp (2020 - Present)</h4>
                <p className='text-gray-400'>Developed and maintained web applications using React and Node.js.</p>
              </div>
              
            </div>
            </div>

          </div>

        </div>
      </div>
      
    </motion.div>
  )
}

export default About
