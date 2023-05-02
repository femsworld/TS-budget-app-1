import React from 'react'

interface BalanceProps {
totalIncome : number
totalExpense: number
}

const CurrentBalance = (props: BalanceProps) => {
    // console.log(props.totalIncome)
    console.log(props.totalExpense)
  return (
    <div>CurrentBalance</div>
  )
}

export default CurrentBalance