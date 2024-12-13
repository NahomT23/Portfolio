import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import demo3 from '../assets/images/demo3.jpg'; 
import demo4 from '../assets/images/demo4.jpg'; 
import demo5 from '../assets/images/demo5.jpg';
import expt from '../assets/images/expt.jpg';
import lifeline from '../assets/images/lifeline.jpg';
import kalitImage from '../assets/images/kalitImage.jpg'
import payzen from '../assets/images/payzen.jpg'
import feedback from "../assets/images/feedback.jpg"
import gymManager from "../assets/images/gymManager.jpg"
const Portfolio = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1 // Trigger when 10% of the element is in view
    });

    const portfolios = [
        {
            id: 1,
            name: 'AI Expense Tracker',
            src: expt,
            demoLink: 'https://ai-expense-tracker-4.onrender.com/',
            codeLink: 'https://github.com/NahomT23/AI-Expense-Tracker.git',
            technologies: ['React', 'Express', 'GraphQL', 'MongoDb', 'Tailwind', 'Gemini AI API']
        },
        {
            id: 2,
            name: 'LifeLine HomeCare',
            src: lifeline,
            demoLink: 'https://lifeline-homecare-31a7.onrender.com/',
            codeLink: 'https://github.com/NahomT23/LifeLine-HomeCare.git',
            technologies: ['React', 'Tailwind']
        },
        {
            id: 3,
            name: 'Kalit Watch Store',
            src: kalitImage,
            demoLink: 'https://a159-102-218-51-46.ngrok-free.app',
            codeLink: 'https://github.com/user/repo3',
            technologies: ['React', 'Tailwind', 'Express', 'Node', 'Ngrok', 'Firebase', 'Telegram API']
        },
        {
            id: 4,
            name: 'PayZen Invoice',
            src: payzen,
            demoLink: 'https://zen-pay-m4fi.vercel.app/',
            codeLink: 'https://github.com/NahomT23/ZenPay.git',
            technologies: ['Nextjs', 'Typescript', 'Tailwind', 'clerk', 'Drizzle ORM', 'Stripe']
        },
        {
            id: 5,
            name: 'QuickFeed',
            src: feedback,
            demoLink: 'https://quick-feed-u6z9.vercel.app/',
            codeLink: 'https://github.com/NahomT23/quickFeed.git',
            technologies: ['Nextjs', 'Typescript', 'clerk', 'Tailwind', 'Prisma', 'PostgreSQL', 'Stripe']
        },
        {
            id: 6,
            name: 'GymManager Cloud',
            src: gymManager,
            demoLink: 'https://gym-managment-three.vercel.app/',
            codeLink: 'https://github.com/NahomT23/GYM-managment.git',
            technologies: ['Nextjs', 'Typescript', 'PostgreSQL', 'Prisma', 'Supabase', 'Better-Auth', 'Zod', 'Tailwind']
        }
    ];

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-20'>
            <div className='max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline-block border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0'>
                        {portfolios.map(({ id, src, demoLink, codeLink, name, technologies }) => (
                            <motion.div
                                key={id}
                                className='shadow-md shadow-gray-600 rounded-lg overflow-hidden flex flex-col'
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: sectionInView ? 1 : 0, scale: sectionInView ? 1 : 0.9 }}
                                transition={{ duration: 0.5, delay: id * 0.1 }}
                            >
                                 <img src={src} alt={`Portfolio ${id}`} className='w-full h-72 object-contain duration-200 hover:scale-105' />


                                <div className='p-4 flex flex-col flex-grow'>
                                    {/* Display project name */}
                                    <div className='mb-2'>
                                        <p className='text-lg font-semibold'>{name}</p>
                                    </div>

                                    {/* Display technologies used */}
                                    <div className='mb-4'>
                                        <p className='text-md font-semibold pb-2'></p>
                                        <ul className='grid grid-cols-2 gap-2 list-disc pl-5 text-gray-300 text-sm'>
                                            {technologies.map((tech, index) => (
                                                <li key={index}>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Align buttons closer together */}
                                    <div className='flex items-center justify-center space-x-3 mt-auto'>
                                        <a
                                            href={demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='px-4 py-2 bg-purple-700 rounded-md text-white duration-200 hover:bg-purple-500 hover:scale-105'
                                        >
                                            Demo
                                        </a>
                                        <a
                                            href={codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='px-4 py-2 bg-teal-700 rounded-md text-white duration-200 hover:bg-teal-500 hover:scale-105'
                                        >
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Portfolio;
