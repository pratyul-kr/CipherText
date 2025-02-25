import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import musicStyle from './Music.module.css';

const Music = () => {
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
    <button onClick={toggleAudio} className={`fa-solid ${isPlaying ? 'fa-circle-pause' : 'fa-circle-play'} ${musicStyle.music}`}>
    </button>
  );
};

export default Music;