import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error('Please fill out all fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await emailjs.send(
        'service_vb0pohl',
        'template_baj1eic',
        formData,
        '7nxlpYzttyQELnbwX'
      );

      console.log('SUCCESS!', response.status, response.text);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('FAILED...', error);
      toast.error('Failed to send the message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <motion.p
            ref={titleRef}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: titleInView ? 1 : 0,
              y: titleInView ? 0 : -50,
            }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            Contact
          </motion.p>
          <motion.p
            ref={titleRef}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: titleInView ? 1 : 0,
              y: titleInView ? 0 : -50,
            }}
            transition={{ duration: 0.8 }}
            className="py-6"
          >
            Submit your form below to get in contact with me
          </motion.p>
        </div>
        <div className="flex justify-center items-center">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: formInView ? 1 : 0,
              y: formInView ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 duration-300'
              }`}
            >
              {isLoading ? 'Sending...' : "Let's talk"}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white py-4 mt-12">
        <div className="flex justify-center items-center space-x-6">
          <a href="https://github.com/NahomT23" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-cyan-400 transition duration-300" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tnahom214@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-3xl hover:text-cyan-400 transition duration-300" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
