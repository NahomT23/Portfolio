import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import html from '../assets/images/html.png'; 
import css from '../assets/images/css.png'; 
import javascript from '../assets/images/javascript.png'; 
import tailwind from '../assets/images/tailwind.png'; 
import react from '../assets/images/react.png'; 
import nextjs from '../assets/images/nextjs.png';
import postgreSQL from '../assets/images/postgreSQL.png'; 
import node from '../assets/images/node.png'; 
import typescript from '../assets/images/typescript.png'; 
import mongoDB from '../assets/images/mongoDB.png'; 
import firestore from '../assets/images/firestore.png';
import graphql from '../assets/images/graphql.png';
import express from '../assets/images/express.png';

const Experience = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1 // Trigger when 10% of the element is in view
    });

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: node,
            title: 'Node.js',
            style: 'shadow-green-400'
        },
        {
            id: 7,
            src: express,
            title: 'Express',
            style: 'shadow-white',
            isSpecial: true
        },
        {
            id: 8,
            src: firestore,
            title: 'Firebase',
            style: 'shadow-orange-400'
        },
        {
            id: 9,
            src: mongoDB,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: postgreSQL,
            title: 'PostgreSQL',
            style: 'shadow-blue-500'
        },
        {
            id: 11,
            src: graphql,
            title: 'GraphQL',
            style: 'shadow-pink-500'
        },
        {
            id: 12,
            src: nextjs,
            title: 'Next',
            style: 'shadow-white',
            isSpecial: true
        },
        {
            id: 13,
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-blue-600'
        },
    ];

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-20'>
            <div className='max-w-screen-lg mx-auto p-10 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl merriweather-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-7'>These are the technologies I have worked with</p>
                </div>

                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-4 sm:px-0'>
                        {techs.map(({ id, src, title, style, isSpecial }) => (
                            <motion.div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} flex flex-col justify-end items-center`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: sectionInView ? 1 : 0, scale: sectionInView ? 1 : 0.9 }}
                                transition={{ duration: 0.5, delay: id * 0.1 }}
                            >
                                <img 
                                    src={src} 
                                    alt={title} 
                                    className={`w-24 h-24 object-contain ${isSpecial ? 'filter invert brightness-0' : ''}`} 
                                />
                                <p className='mt-4 mb-2 text-sm'>{title}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Experience;


