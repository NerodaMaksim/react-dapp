import React from 'react'
import './App.scss'
import { Header } from '../components/Header'
import { GasPrices } from '../components/GasPrices'
import { TransactionCreator } from '../components/TransactionCreator'
import { MetaMaskButton } from '../components/MetaMaskButton'
import {Web3ProviderWrapper} from '../utils/providers'


function App() {
  return(
    <div className='App'>
      <Web3ProviderWrapper>
        <Header />
        <MetaMaskButton />
        <GasPrices />
        <TransactionCreator />
      </Web3ProviderWrapper>
    </div>
  )
}

export default App;