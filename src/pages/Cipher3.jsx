import React, { useState } from 'react';
import cipher3Style from './Cipher3.module.css';

// Helper Function: Calculate Modular Inverse
const modInverse = (a, m) => {
  a = a % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x;
  }
  return -1;
};

// Helper Function: Calculate Determinant
const calculateDeterminant = (matrix) => {
  const size = matrix.length;
  let det = 0;

  if (size === 2) {
    det = (matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]) % 26;
  } else if (size === 3) {
    det =
      (matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
       matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
       matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0])) % 26;
  }

  return (det + 26) % 26; // Handle negative determinants
};

// Helper Function: Calculate Adjugate Matrix
const calculateAdjugate = (matrix) => {
  const size = matrix.length;
  const adjugate = Array.from({ length: size }, () => Array(size).fill(0));

  if (size === 2) {
    adjugate[0][0] = matrix[1][1];
    adjugate[0][1] = -matrix[0][1];
    adjugate[1][0] = -matrix[1][0];
    adjugate[1][1] = matrix[0][0];
  } else if (size === 3) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const minor = [];
        for (let x = 0; x < size; x++) {
          if (x !== i) {
            const row = [];
            for (let y = 0; y < size; y++) {
              if (y !== j) {
                row.push(matrix[x][y]);
              }
            }
            minor.push(row);
          }
        }
        const minorDet = calculateDeterminant(minor);
        adjugate[j][i] = ((i + j) % 2 === 0 ? minorDet : -minorDet + 26) % 26;
      }
    }
  }

  return adjugate;
};

// Helper Function: Inverse Matrix Calculation
const calculateInverseMatrix = (matrix) => {
  const det = calculateDeterminant(matrix);
  const detInv = modInverse(det, 26);

  if (detInv === -1) {
    alert("Matrix is not invertible under mod 26.");
    return null;
  }

  const adjugate = calculateAdjugate(matrix);
  const size = matrix.length;
  const inverseMatrix = Array.from({ length: size }, () => Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      inverseMatrix[i][j] = (adjugate[i][j] * detInv) % 26;
      if (inverseMatrix[i][j] < 0) {
        inverseMatrix[i][j] += 26;
      }
    }
  }

  return inverseMatrix;
};

// Main Component
const Cipher3 = () => {
  const [text, setText] = useState('');
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState('');

  // Function to generate the key matrix from keyword
  const generateKeyMatrix = () => {
    const sanitizedKeyword = keyword.toUpperCase().replace(/[^A-Z]/g, '');
    const keyLength = sanitizedKeyword.length;

    if (keyLength !== 4 && keyLength !== 9) {
      alert("Keyword length must be 4 (2x2) or 9 (3x3)");
      return null;
    }

    const matrixSize = Math.sqrt(keyLength);
    const keyMatrix = [];

    for (let i = 0; i < matrixSize; i++) {
      keyMatrix.push([]);
      for (let j = 0; j < matrixSize; j++) {
        const charIndex = i * matrixSize + j;
        keyMatrix[i][j] = sanitizedKeyword.charCodeAt(charIndex) - 65;
      }
    }

    return keyMatrix;
  };

  // Function to encrypt or decrypt
  const transformText = (isEncrypt) => {
    const matrix = generateKeyMatrix();
    if (!matrix) return;

    const size = matrix.length;
    const inverseMatrix = isEncrypt ? null : calculateInverseMatrix(matrix);
    if (!isEncrypt && !inverseMatrix) return;

    const sanitizedText = text.toUpperCase().replace(/[^A-Z]/g, '');
    let paddedText = sanitizedText;

    while (paddedText.length % size !== 0) {
      paddedText += 'X';
    }

    const textVectors = [];
    for (let i = 0; i < paddedText.length; i += size) {
      const vector = [];
      for (let j = 0; j < size; j++) {
        vector.push(paddedText.charCodeAt(i + j) - 65);
      }
      textVectors.push(vector);
    }

    const resultVectors = textVectors.map((vector) => {
      const resultVector = [];
      for (let i = 0; i < size; i++) {
        let sum = 0;
        for (let j = 0; j < size; j++) {
          const value = isEncrypt ? matrix[i][j] : inverseMatrix[i][j];
          sum += value * vector[j];
        }
        resultVector.push(sum % 26);
      }
      return resultVector;
    });

    const transformedText = resultVectors
      .flat()
      .map((num) => String.fromCharCode(num + 65))
      .join('');

    setResult(transformedText);
  };

  const handleEncrypt = () => transformText(true);
  const handleDecrypt = () => transformText(false);

  return (
    <main className={cipher3Style.main}>
      <span className={cipher3Style.title}>Hill Cipher</span>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={cipher3Style.input_box}
      />
      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className={cipher3Style.input_box}
      />
      <div className={cipher3Style.button_group}>
        <button onClick={handleEncrypt} className={`${cipher3Style.button} ${cipher3Style.encrypt}`}>
          Encrypt
        </button>
        <button onClick={handleDecrypt} className={`${cipher3Style.button} ${cipher3Style.decrypt}`}>
          Decrypt
        </button>
      </div>
      <span className={cipher3Style.result}>Result: {result}</span>

      <div className={cipher3Style.notes}>
        <span className={cipher3Style.nitle}>Hill Cipher Notes</span>
        <div className={cipher3Style.img_group}>
          <a href="upi://pay?pa=pratyulplays@oksbi&pn=Pratyul%20Kumar%20Rath&am=1&cu=INR" className={cipher3Style.img}>Buy premium to view notes.</a>
          <a href="upi://pay?pa=pratyulplays@oksbi&pn=Pratyul%20Kumar%20Rath&am=1&cu=INR" className={cipher3Style.img}>Buy premium to view notes.</a>
          <a href="upi://pay?pa=pratyulplays@oksbi&pn=Pratyul%20Kumar%20Rath&am=1&cu=INR" className={cipher3Style.img}>Buy premium to view notes.</a>
          <a href="upi://pay?pa=pratyulplays@oksbi&pn=Pratyul%20Kumar%20Rath&am=1&cu=INR" className={cipher3Style.img}>Buy premium to view notes.</a>
          <a href="upi://pay?pa=pratyulplays@oksbi&pn=Pratyul%20Kumar%20Rath&am=1&cu=INR" className={cipher3Style.img}>Buy premium to view notes.</a>
        </div>
      </div>
    </main>
  );
};

export default Cipher3;