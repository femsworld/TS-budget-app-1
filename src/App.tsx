import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

import Income from './components/Income';
import Expenses from './components/Expenses';
import CurrentBalance from './components/CurrentBalance';
// import SetTarget from './components/SetTarget';

function App() {

  const [totalIncome, setTotalIncome] = useState(0)
  const getTotalIncome = (income: number) => {
    setTotalIncome(income)
    // console.log(income)
  }

  const [totalExpense, setTotalExpense] = useState(0)
  const getTotalExpense = (expense: number) => {
    setTotalExpense(expense)
    // console.log(expense)
  }

  return (
    <div className="App">
      <Income getTotalIncome={getTotalIncome}/>
      <Expenses getTotalExpense={getTotalExpense}/>
      {/* <SetTarget/> */}
      <div className='currentBalance'><CurrentBalance totalIncome={totalIncome} totalExpense={totalExpense}/></div>
    </div>
  );
}

export default App;
