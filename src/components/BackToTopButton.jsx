import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa6";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setShowButton(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-[#dd2010] text-white px-2 py-2 rounded-full transition-opacity ${showButton ? 'opacity-100' : 'opacity-0'}`}
    >
      <FaArrowUp size={25}/>
    </button>
  );
};

export default BackToTopButton;