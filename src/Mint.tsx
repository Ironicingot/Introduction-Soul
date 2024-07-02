import React from 'react';
import './Mint.css';
import mascot from './assets/nftmascot.png'; // Adjust the path if necessary

const Mint: React.FC = () => {
  return (
    <div className="container">
      <div className="left-side">
      <p className="soulana">SOULANA</p>
        <p  className="rev-nfts">REV-NFTS</p>
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
          <img src={mascot} alt="NFT Mascot" className="mascot" />
          <div className="mint-details">
            <div className="mint-box">
              <h2 className="mint-title">MINT</h2>
              <p className="mint-description">Enter the amount of NFTs you would like to buy</p>
            </div>
            <div className="counter-box">
              <div className="counter-section">
                <button className="counter-button">-</button>
                <span className="counter">1</span>
                <button className="counter-button">+</button>
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
