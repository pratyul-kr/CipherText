import React from 'react';
import { Link } from 'react-router-dom';
import cipher2Style from './Cipher2.module.css';
import { useState } from "react";

const Cipher2 = () => {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");

  // Helper to create the 5x5 grid
  const createGrid = (keyword) => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // 'J' is omitted
    keyword = keyword.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I");
    let keyString = "";
    for (let char of keyword) {
      if (!keyString.includes(char) && alphabet.includes(char)) {
        keyString += char;
      }
    }
    for (let char of alphabet) {
      if (!keyString.includes(char)) {
        keyString += char;
      }
    }
    const grid = [];
    for (let i = 0; i < keyString.length; i += 5) {
      grid.push(keyString.slice(i, i + 5).split(""));
    }
    return grid;
  };

  // Helper to get position in grid
  const getPosition = (grid, char) => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === char) {
          return { row, col };
        }
      }
    }
  };

  // Helper to format text into digraphs
  const formatText = (input) => {
    input = input.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I");
    let digraphs = [];
    let i = 0;
    while (i < input.length) {
      let first = input[i];
      let second = input[i + 1];
      if (first === second || !second) {
        second = "X";
        i++;
      } else {
        i += 2;
      }
      digraphs.push(first + second);
    }
    return digraphs;
  };

  // Encrypt or Decrypt
  const playfair = (input, keyword, mode) => {
    const grid = createGrid(keyword);
    const digraphs = formatText(input);
    let output = "";

    digraphs.forEach((pair) => {
      const pos1 = getPosition(grid, pair[0]);
      const pos2 = getPosition(grid, pair[1]);

      if (pos1.row === pos2.row) {
        // Same Row
        output += grid[pos1.row][(pos1.col + (mode === "encrypt" ? 1 : 4)) % 5];
        output += grid[pos2.row][(pos2.col + (mode === "encrypt" ? 1 : 4)) % 5];
      } else if (pos1.col === pos2.col) {
        // Same Column
        output += grid[(pos1.row + (mode === "encrypt" ? 1 : 4)) % 5][pos1.col];
        output += grid[(pos2.row + (mode === "encrypt" ? 1 : 4)) % 5][pos2.col];
      } else {
        // Rectangle Swap
        output += grid[pos1.row][pos2.col];
        output += grid[pos2.row][pos1.col];
      }
    });

    return output;
  };

  // Event Handlers
  const handleEncrypt = () => {
    setResult(playfair(text, keyword, "encrypt"));
  };

  const handleDecrypt = () => {
    setResult(playfair(text, keyword, "decrypt"));
  };

  return (
    <main className={cipher2Style.main}>
      <h2 className={cipher2Style.title}>Playfair Cipher</h2>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={cipher2Style.input_box}
      />
      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className={cipher2Style.input_box}/>
      <div className={cipher2Style.button_group}>
        <button onClick={handleEncrypt} className={`${cipher2Style.button} ${cipher2Style.encrypt}`}>
          Encrypt
        </button>
        <button onClick={handleDecrypt} className={`${cipher2Style.button} ${cipher2Style.decrypt}`}>
          Decrypt
        </button>
      </div>
      <h3 className={cipher2Style.result}>Result: {result}</h3>
    </main>
  );
};

export default Cipher2;