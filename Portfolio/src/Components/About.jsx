import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,
  });

  // Framer Motion controls
  const controlsTitle = useAnimation();
  const controlsContentLeft = useAnimation();
  const controlsContentRight = useAnimation();

  // Animate on view
  React.useEffect(() => {
    if (titleInView) {
      controlsTitle.start({ opacity: 1, y: 0 });
    } else {
      controlsTitle.start({ opacity: 0, y: -20 });
    }

    if (contentInView) {
      controlsContentLeft.start({ opacity: 1, x: 0 });
      controlsContentRight.start({ opacity: 1, x: 0 });
    } else {
      controlsContentLeft.start({ opacity: 0, x: -50 });
      controlsContentRight.start({ opacity: 0, x: 50 });
    }
  }, [titleInView, contentInView, controlsTitle, controlsContentLeft, controlsContentRight]);

  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white overflow-hidden'>
      <div className='flex flex-col justify-center items-center w-full h-full ml-6'>
        
        {/* Section Title */}
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
          <div className='text-left pb-8 pl-4 '>
            <motion.p
              ref={titleRef}
              className='text-4xl merriweather-bold inline border-b-4 border-gray-500'
              initial={{ opacity: 0, y: -20 }}
              animate={controlsTitle}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              About Me
            </motion.p>
          </div>
          <div></div>
        </div>
        
        {/* Content Container */}
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <motion.div
            ref={contentRef}
            className='text-left'
            initial={{ opacity: 0, x: -50 }}
            animate={controlsContentLeft}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className='text-2xl merriweather-bold'>
              Hi 👋, I'm Nahom Tsegaye!
            </p>
            <p className='text-lg mt-4 merriweather-regular'>
              {/* I'm a software developer with a passion for creating impactful solutions. 
              Explore my work and see how I can help you achieve your goals. */}
              I'm a self-taught software developer with a passion for creating impactful solutions.
               Through practical experience and continuous learning, I’ve gained expertise in building
                efficient, scalable, and user-friendly applications. Explore my work to see how I can help you achieve your goals.
            </p>
          </motion.div>
          <motion.div
            ref={contentRef}
            className='text-left'
            initial={{ opacity: 0, x: 50 }}
            animate={controlsContentRight}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className='text-lg merriweather-regular'>
              I’m dedicated to building exceptional software that enhances lives.
               From individuals to enterprises, I craft solutions tailored to meet your needs.
                Imagine having a software expert at your disposal, what could we achieve together?
            </p>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

export default About;













