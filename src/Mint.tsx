import React from 'react';
import './Mint.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="left-side">
        <h1 className="soulana">SOULANA</h1>
        <h2 className="rev-nfts">REV-NFTS</h2>
        <p className="description">
          Participate in the initial Bootstrap of the SOUL/SOL liquidity. Mint your NFTs and gain equity in all revenue streams earned within the protocol. Limited to 500 Pieces
        </p>
        <div className="buttons">
          <button className="docs">Docs</button>
          <button className="product-showcase">Product Showcase</button>
        </div>
      </div>
      <div className="right-side">
        <img src="nftmascot.png" alt="NFT Mascot" className="mascot" />
        <div className="mint-section">
          <h2 className="mint-title">MINT</h2>
          <p className="mint-description">Enter the amount of NFTs you would like to buy</p>
          <div className="counter-section">
            <button className="counter-button">-</button>
            <span className="counter">1</span>
            <button className="counter-button">+</button>
          </div>
          <p className="minted-status">100/500 Minted</p>
          <div className="total-section">
            <p className="total-title">Total</p>
            <p className="total-value">0.15 SOL</p>
          </div>
          <button className="connect-wallet">CONNECT WALLET</button>
        </div>
      </div>
    </div>
  );
};

export default App;
