import React, { useState, useRef, useEffect } from 'react';
import musicStyle from './Music.module.css';

const Music = () => {
  /*useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(`.${navbarStyle.nav}`);
      if (window.scrollY > 50) {
        nav.classList.add(navbarStyle.scrolled);
      } else {
        nav.classList.remove(navbarStyle.scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);*/
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/background.mp3');
    audioRef.current.loop = true; // Loop audio

    // Clean up audio on component unmount
    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log('Audio play failed:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button className={musicStyle.fab} onClick={toggleAudio}>
      <i className={`fa-solid ${isPlaying ? 'fa-pause-circle' : 'fa-play-circle'} ${musicStyle.icon}`}></i>
    </button>
  );
};

export default Music;