
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false, // Allows continuous triggering
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false, // Allows continuous triggering
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div name='contact' className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <motion.p
                  ref={titleRef}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
                  transition={{ duration: 0.6 }}
                  className='text-4xl font-bold inline border-b-4 border-gray-500'
                >
                  Contact
                </motion.p>
                <motion.p
                  ref={titleRef}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
                  transition={{ duration: 0.8 }}
                  className='py-6'
                >
                  Submit your form below to get in contact with me
                </motion.p>
            </div>
            <div className='flex justify-center items-center'>
                <motion.form
                  ref={formRef}
                  action="https://getform.io/f/pamqqmxa"
                  method='POST'
                  className='flex flex-col w-full md:w-1/2'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
                  transition={{ duration: 0.8 }}
                >
                    <input
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder='Enter your email'
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea
                        name="message"
                        rows='4'
                        placeholder='Enter your message'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Let's talk
                    </button>
                </motion.form>
            </div>
        </div>
    </div>
  )
}

export default Contact;
