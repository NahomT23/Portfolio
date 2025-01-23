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
import nestjs from "../assets/images/nestjs.png"
import redis from "../assets/images/redis.png"
import docker from "../assets/images/docker.png"

const Experience = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1 
    });


    const techs = [
        {
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500 hover:shadow-orange-700 hover:scale-105'
        },
        {
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500 hover:shadow-blue-700 hover:scale-105'
        },
        {
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500 hover:shadow-yellow-700 hover:scale-105'
        },
        {
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-blue-600 hover:shadow-blue-800 hover:scale-105'
        },
        {
            src: react,
            title: 'React',
            style: 'shadow-blue-600 hover:shadow-blue-800 hover:scale-105'
        },
        {
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400 hover:shadow-sky-600 hover:scale-105'
        },
        {
            src: nextjs,
            title: 'Next.js',
            style: 'shadow-white hover:shadow-gray-300 hover:scale-105',
            isSpecial: true
        },
        {
            src: node,
            title: 'Node.js',
            style: 'shadow-green-400 hover:shadow-green-600 hover:scale-105'
        },
        {
            src: express,
            title: 'Express',
            style: 'shadow-white hover:shadow-gray-300 hover:scale-105',
            isSpecial: true
        },
        {
            src: nestjs,
            title: 'Nest.js',
            style: 'shadow-red-400 hover:shadow-red-600 hover:scale-105'
        },
        {
            src: firestore,
            title: 'Firebase',
            style: 'shadow-orange-400 hover:shadow-orange-600 hover:scale-105'
        },
        {
            src: mongoDB,
            title: 'MongoDB',
            style: 'shadow-green-500 hover:shadow-green-700 hover:scale-105'
        },
        {
            src: postgreSQL,
            title: 'PostgreSQL',
            style: 'shadow-blue-500 hover:shadow-blue-700 hover:scale-105'
        },
        {
            src: redis,
            title: 'Redis',
            style: 'shadow-red-500 hover:shadow-red-700 hover:scale-105'
        },
        // {
        //     src: docker,
        //     title: 'Docker',
        //     style: 'shadow-blue-400 hover:shadow-blue-600 hover:scale-105'
        // },
        {
            src: graphql,
            title: 'GraphQL',
            style: 'shadow-pink-500 hover:shadow-pink-700 hover:scale-105'
        }
    ].map((tech, index) => ({ ...tech, id: index + 1 })); 


    return (
<div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-20">
    <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center w-full h-full text-white">
        <div>
            <p className="text-4xl merriweather-bold inline border-b-4 border-gray-500">My Tech Stack</p>
            <p className="py-7"></p>
        </div>

        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
        >
            <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
                {techs.map(({ id, src, title, style, isSpecial }) => (
                    <motion.div
                        key={id}
                        className={`shadow-md hover:scale-105 duration-500 py-3 rounded-lg ${style} flex flex-col justify-end items-center`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: sectionInView ? 1 : 0, scale: sectionInView ? 1 : 0.9 }}
                        transition={{ duration: 0.5, delay: id * 0.1 }}
                    >
                        <img
                            src={src}
                            alt={title}
                            className={`w-16 h-16 object-contain ${isSpecial ? 'filter invert brightness-0' : ''}`}
                        />
                        <p className="mt-2 mb-1 text-xs">{title}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </div>
</div>





    );
}

export default Experience;


