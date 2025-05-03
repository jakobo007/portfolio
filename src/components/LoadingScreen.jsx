import React, { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete }) => {

    const [text, setText] = useState('')
    const fullText = '<Hallo Welt />'

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
           
            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete()
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval)
    }, [onComplete])



  return (
    <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4'>

        <div className='mb-4 text-2xl md:text-4xl text-wrap font-mono font-bold'>
            {text} <span className='animate-blink ml-1'>|</span>
        </div>

        <div className='w-[200px] h-[2px] bg-gray-800 rounded overlow-hidden'>
            <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b8246 animate-loading-bar'></div>
        </div>
      
    </div>
  )
}

export default LoadingScreen
