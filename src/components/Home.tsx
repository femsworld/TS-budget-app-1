import React, { useState } from 'react'

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

const Home = () => {
    const amountOfIncome = useInput()
    const incomeSource = useInput()
    const dateOfIncome = useInput()

    const printData = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Income Source: ", incomeSource.value)
        console.log("Amount: ", amountOfIncome.value)
        console.log("Date: ", dateOfIncome.value)
    }
    /* const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
    }
    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    } */
    return (
        <form onSubmit={printData}>
            <div>
                <label htmlFor="incomeSource">Income Source</label>
                <input
                    type="text"
                    name="incomeSource"
                    id="incomeSource"
                    placeholder="Salary"
                    // readOnly
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
                type="submit">Send data</button>
        </form>
    )
}

export default Home