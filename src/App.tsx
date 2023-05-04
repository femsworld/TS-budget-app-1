import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

import Income from './components/Income';
import Expenses from './components/Expenses';
import CurrentBalance from './components/CurrentBalance';
import SetTargetAmount from './components/SetTargetAmount';
import TransferToSaving from './components/TransferToSaving';

function App() {

  const [totalIncome, setTotalIncome] = useState(0)
  const getTotalIncome = (income: number) => {
    setTotalIncome(income)
  }

  const [totalExpense, setTotalExpense] = useState(0)
  const getTotalExpense = (expense: number) => {
    setTotalExpense(expense)
  }

  const [totalTarget, setTotalTarget] = useState(0)
  const getTotalTarget = (target: number) => {
    setTotalTarget(target)
  }

  const [totalTransfer, setTotalTransfer] = useState(0)
  const totalTransferAmount = (transfer: number) => {
    setTotalTransfer(transfer)
  }

  return (
    <div className="App">
      <Income getTotalIncome={getTotalIncome}/>
      <Expenses getTotalExpense={getTotalExpense}/>
      <SetTargetAmount getTotalTarget={getTotalTarget}/>
      <TransferToSaving totalTransferAmount={totalTransferAmount}/>
      <div className='currentBalance'><CurrentBalance totalIncome={totalIncome} totalExpense={totalExpense} totalTransfer= {totalTransfer} /></div>
    </div>
  );
}

export default App;
