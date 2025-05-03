import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
      alert('Message sent successfully!');
    }).catch(() => {
      alert('Message failed to send. Please try again.');
    })
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5 }}}
      viewport={{ once: false, amount: 0.5 }}
      id='contact'
    className='contact min-h-screen flex items-center justify-center py-20'>
      
      <div className='px-4 w-150'>
      <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Get in Touch</h2>
      <form onSubmit={handleSubmit} className='space-y-6'>

        <div className='relative'>
          <input type="text" id='name' name='name' required placeholder='Name...'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />
        </div>

        <div className='relative'>
          <input type="text" id='email' name='email' required placeholder='example@gmail.com'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className='w-full bg-white/5 border-white/10 border rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />
        </div>

        <div className='relative'>
          <textarea type="text" rows={5} id='message' name='message' required placeholder='Your Message...'
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className='w-full bg-white/5 border-white/10 border rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />
        </div>

        <button type="submit" className='w-full text-white bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>Send Message</button>
        
      </form>
      </div>

    </motion.div>
  )
}

export default Contact
