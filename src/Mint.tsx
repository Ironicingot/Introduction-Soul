import React, { useState } from 'react';
import './Mint.css';
import mascot from './assets/nftmascot.png'; // Adjust the path if necessary
import backdrop from './assets/Backdrop.png'; // Adjust the path if necessary

const words = ["Bootstrap", "Secure", "Redistribute"];

const Mint: React.FC = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="rotating-text">
          <div className="rotating-text__container">
            <ul className="rotating-text__container__list">
              {words.map((word, index) => (
                <li key={index} className="rotating-text__container__list__item">
                  {word}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="soulana">SOULANA</p>
        <p className="rev-nfts">REV-NFTS</p>
        <p className="description">
          Participate in the initial Bootstrap of the SOUL/SOL liquidity. Mint your NFTs and gain equity in all revenue streams earned within the protocol. Limited to 500 Pieces
        </p>
        <div className="buttons">
          <button className="docs">Docs</button>
          <button className="product-showcase">Product Showcase</button>
        </div>
      </div>
      <div className="right-side">
        <div className="mint-section">
          <img src={backdrop} alt="Backdrop" className="backdrop" />
          <img src={mascot} alt="NFT Mascot" className="mascot" />
          <div className="mint-details">
            <div className="mint-box">
              <h2 className="mint-title">MINT</h2>
              <p className="mint-description">Enter the amount of NFTs you would like to buy</p>
              <div className="counter-section">
                <button className="counter-button" onClick={handleDecrement}>-</button>
                <input type="text" className="counter-input" value={count} readOnly />
                <button className="counter-button" onClick={handleIncrement}>+</button>
              </div>
              <p className="minted-status">100/500 Minted</p>
            </div>
            <div className="total-box">
              <div className="total-section">
                <p className="total-title">Total</p>
                <p className="total-value">0.15 SOL</p>
              </div>
            </div>
            <div className="wallet-box">
              <button className="connect-wallet">CONNECT WALLET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
