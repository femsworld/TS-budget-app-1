import React from 'react'

interface BalanceProps {
totalIncome : number
}
const CurrentBalance = (props: BalanceProps) => {
    console.log(props.totalIncome)
  return (
    <div>CurrentBalance</div>
  )
}

export default CurrentBalance