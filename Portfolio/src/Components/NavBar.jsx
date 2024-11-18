import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-scroll';
import { FaTelegram } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { ref: navRef, inView: navInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const links = [
    { id: 1, label: 'home' },
    { id: 2, label: 'about' },
    { id: 3, label: 'portfolio' },
    { id: 4, label: 'experience' },
    { id: 5, label: 'contact' },
  ];

  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/NahomT23',
      style: 'hover:bg-gray-700',
    },
    {
      id: 2,
      child: (
        <>
          Mail <MdOutlineEmail size={30} />
        </>
      ),
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=tnahom214@gmail.com',
      style: 'hover:bg-gray-700 rounded-br-md',
    },
    {
      id: 2,
      child: (
        <>
          Telegram <FaTelegram size={30} />
        </>
      ),
      href: 'https://t.me/nahomT23',
      style: 'hover:bg-gray-700 rounded-br-md',
    },
  ];

  const menuVariants = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={navRef}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: navInView ? 1 : 0, y: navInView ? 0 : -50 }}
      transition={{ duration: 0.6 }}
      className="px-4 flex justify-between items-center w-full h-20 text-white bg-black fixed z-50 top-0 left-0"
    >
      <div>
        <h1 style={{ fontFamily: 'Sevillana, cursive' }} className="text-5xl ml-2 font-bold">
          Nahom
        </h1>
      </div>

      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li key={link.id} className="cursor-pointer text-gray-500 hover:text-white transition duration-200 capitalize">
            <Link to={link.label} smooth duration={500}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden fixed top-4 right-4"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <motion.ul
        variants={menuVariants}
        initial="hidden"
        animate={nav ? 'visible' : 'exit'}
        className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 space-y-6"
      >
        {links.map((link) => (
          <li key={link.id} className="cursor-pointer capitalize text-4xl">
            <Link onClick={() => setNav(!nav)} to={link.label} smooth duration={500}>
              {link.label}
            </Link>
          </li>
        ))}
      </motion.ul>

      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {socialLinks.map((link) => (
            <motion.li
              key={link.id}
              className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-110px] hover:rounded-md duration-300 hover:ml-[-10px] ${link.style}`}
            >
              <a
                href={link.href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.child}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default NavBar;
