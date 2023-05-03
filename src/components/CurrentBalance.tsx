import React from 'react'

interface BalanceProps {
totalIncome : number
totalExpense: number
}

const CurrentBalance = (props: BalanceProps) => {
    const currentBalance = props.totalIncome - props.totalExpense
  return (
    <div>CurrentBalance: {currentBalance}EUR</div>
  )
}

export default CurrentBalance