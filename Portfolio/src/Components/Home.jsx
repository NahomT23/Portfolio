import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-scroll';
import me from '../assets/images/me.jpg';

const Home = () => {
    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div name="home" className='w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center'>
            <div className='max-w-[1200px] mx-auto px-8 pt-16 md:pt-24 flex flex-col md:flex-row items-start text-center md:text-left'>
                
                <motion.div
                    ref={textRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                    className='flex flex-col justify-start items-center md:items-start text-center md:text-left pt-20 md:pt-0 md:mr-16 w-full'
                >
                    <h2 className='text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight'>
                        <span className='block'>I'm a Full Stack</span>
                        <span className='block'>Developer</span>
                    </h2>

                    <p className='text-gray-400 py-4 max-w-md'>
                        I build high-quality web applications with a focus on both front-end and back-end development. Passionate about creating seamless user experiences and staying ahead with the latest technologies.
                    </p>
                    <div>
                        <Link to="portfolio" smooth={true} offset={-80} duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <FaArrowRightLong size={15} className='ml-2' />
                            </span>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    ref={imageRef}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                    className='w-full md:w-1/3 flex justify-center items-start mt-8 md:mt-0'
                >
                    <img 
                        src={me} 
                        alt="me" 
                        className='rounded-2xl w-3/4'
                        style={{ width: '300px' }}
                    />
                </motion.div>

            </div>
        </div>
    );
}

export default Home;


