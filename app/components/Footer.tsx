import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-1">
      <div className="container mx-auto flex flex-row items-center justify-center px-4">
        <p className="text-xl mb-2 text-white-400 flex items-center">
          Made with 💖 by Akash Yadav
        </p>
        <div className="flex items-center ml-2 space-x-2">
          <a
            href="https://github.com/akashyadav30045/Resume-Builder-and-Parser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 items-center"
          >
            <FaGithub className="text-2xl mb-2 space-x-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-yadav-636973166/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 items-center"
          >
            <FaLinkedin className="text-2xl mb-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
