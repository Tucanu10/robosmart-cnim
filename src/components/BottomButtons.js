"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const BottomButtons = ({
  width = "w-48",
  background = "bg-slate-300/10",
  borderRadius = "rounded-full",
  padding = "py-3 px-3",
}) => {
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('robosmartcnim@gmail.com').then(() => {
      setMessage('Email copied to clipboard!');
      setTimeout(() => setMessage(''), 2000); // Clear message after 2 seconds
    });
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      {/* Display message above buttons */}
      {message && <div className="text-light-cyan mb-2">{message}</div>}

      {/* CONTACT INFO text above buttons */}
      <div className="text-light-cyan font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        CONTACT INFO
      </div>

      <div className={`relative group flex justify-around ${width} ${background} backdrop-blur-lg shadow-lg ${borderRadius} ${padding} border border-white/0`}>
        <a href="https://chat.whatsapp.com/BWXYFi0LbAJHM6afkjufdz" className="text-light-cyan hover:text-white" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </a>
        <a href="https://instagram.com/robosmart_ro156" className="text-light-cyan hover:text-white" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <button onClick={handleCopyEmail} className="text-light-cyan hover:text-white">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </button>
        <a href="https://cnimslatina.ro/despre" className="text-light-cyan hover:text-white" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLocationDot} size="lg" />
        </a>
      </div>
    </div>
  );
};

export default BottomButtons;
