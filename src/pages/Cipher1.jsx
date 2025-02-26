import React from 'react';
import { Link } from 'react-router-dom';
import cipher1Style from './Cipher1.module.css';
import { useState } from "react";

const Cipher1 = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState("");
  const [result, setResult] = useState("");

  // Function to perform Caesar Cipher
  const caesarCipher = (str, shift) => {
    const normalizedShift = ((shift % 26) + 26) % 26;
    return str.replace(/[a-zA-Z]/g, (char) => {
      const base = char <= "Z" ? 65 : 97;
      return String.fromCharCode(
        ((char.charCodeAt(0) - base + normalizedShift) % 26) + base
      );
    });
  };

  const handleEncrypt = () => {
    setResult(caesarCipher(text, parseInt(shift)));
  };

  const handleDecrypt = () => {
    setResult(caesarCipher(text, -parseInt(shift)));
  };

  return (
    <main className={cipher1Style.main}>
      <span className={cipher1Style.title}>Caesar Cipher</span>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={cipher1Style.input_box}
      />
      <input
        type="number"
        placeholder="Shift"
        value={shift}
        onChange={(e) => setShift(e.target.value)}
        className={cipher1Style.input_box}
      />
      <div className={cipher1Style.button_group}>
        <button onClick={handleEncrypt} className={`${cipher1Style.button} ${cipher1Style.encrypt}`}>
          Encrypt
        </button>
        <button onClick={handleDecrypt} className={`${cipher1Style.button} ${cipher1Style.decrypt}`}>
          Decrypt
        </button>
      </div>
      <span className={cipher1Style.result}>Result: {result}</span>
    </main>
  );
};

export default Cipher1;