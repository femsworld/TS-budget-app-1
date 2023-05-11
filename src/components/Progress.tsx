import React from 'react'

interface ProgressProps {
    totalIncome : number
    totalTransfer: number
    amountOfTarget: number
    }

const Progress = (props: ProgressProps) => {
    const currentProgress = props.amountOfTarget - props.totalTransfer
  return (
    <div>Progress: {currentProgress}EUR</div>
  )
}

export default Progress