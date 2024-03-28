// import React from './react';
import './App.css'

function App() {
async function connectWallet(){
  if (typeof window.ethereum !== 'undefined') {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected:', accounts[0]);
        alert('Wallet connected!');
    } catch (error) {
        console.error('Connection failed:', error);
        alert('Failed to connect wallet');
    }
} else {
    alert('MetaMask extension not detected. Please install MetaMask.');
}
}
  return (
    <>
      <h1>Connect your Wallet here</h1>
      <button className='but' onClick={connectWallet}>Connect Wallet</button>
    </>
  )
}

export default App
