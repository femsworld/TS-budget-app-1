import React, { useState, useEffect } from 'react'

type IncomeData = {
    incomeSource: string;
    amount: string;
    date: string;
  }

  interface IncomeProps {
    getTotalIncome: (income: number) => void
}

const useInput = () => {
    const [value, setValue] = useState("")
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange
    }
}

const Income = (props: IncomeProps) => {
    const [incomeList, setIncomeList] = useState<IncomeData[]>([]);
    const amountOfIncome = useInput()
    const incomeSource = useInput()
    const dateOfIncome = useInput()
    const printData = (e: React.FormEvent) => {
        e.preventDefault()
        const newIncome = {
        incomeSource: incomeSource.value,
        amount: amountOfIncome.value,
        date: dateOfIncome.value
    }
    setIncomeList([...incomeList, newIncome])
}

useEffect(() => {
    let totalIncome: number = 0
    for(let item of incomeList) {
        totalIncome+= Number(item.amount)
    }
    props.getTotalIncome(totalIncome)
  }, [incomeList]);

    return (
        <form onSubmit={printData}>
            <div>
                <label htmlFor="incomeSource">Income Source</label>
                <input
                    type="text"
                    name="incomeSource"
                    id="incomeSource"
                    placeholder="Salary"
                    {...incomeSource} />
            </div>
            <div>
                <label htmlFor="amountOfIncome">Amount of Income</label>
                <input
                    type="number"
                    name="amountOfIncome"
                    id="amountOfIncome"
                    {...amountOfIncome}
                />
            </div>
            <div>
                <label htmlFor="dateOfIncome">Date of Income</label>
                <input
                    type="date"
                    name="date"
                     id="date"
                    {...dateOfIncome} />
            </div>
            <button
                type="submit">Add Income
            </button>
            <ul>
                {incomeList.map((income, index) => (
                <li key={index}>
                    <div>Income Source: {income.incomeSource}</div>
                    <div>Amount: {income.amount}EUR</div>
                    <div>Date: {income.date}</div>
                </li>
            ))}
            </ul>
        </form>
    )
}

export default Income