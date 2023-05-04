import React from 'react'

interface BalanceProps {
totalIncome : number
totalExpense: number
totalTransfer: number
}

const CurrentBalance = (props: BalanceProps) => {
    const currentBalance = props.totalIncome - props.totalExpense - props.totalTransfer
  return (
    <div>CurrentBalance: {currentBalance}EUR</div>
  )
}

export default CurrentBalance