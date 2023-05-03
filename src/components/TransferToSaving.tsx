import React, {useState} from 'react'

interface TransferProps {
    getTotalTransfer: (transfer: number) => void
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

const TransferToSaving = (props: TransferProps) => {
    const [transfer, setTransfer] = useState(0);
        const amountOfTransfer = useInput()
        const printData = (e: React.FormEvent) => {
            e.preventDefault()
            if (amountOfTransfer.value === "") {
                setTransfer(0);
            } else {
                setTransfer(parseInt(amountOfTransfer.value));
        }
    }
  return (
    <div>
        <form onSubmit={printData}>
            <div>
                <label htmlFor="setTarget">Transfer to Savings</label> <br></br>
                <input
                    type="number"
                    name="amountOfTransfer"
                    id="amountOfTransfer"
                    {...amountOfTransfer}
                />
                <button type="submit">Transfer</button>
            </div>
            <p>Current Savings: {transfer}EUR</p>
        
        </form>
        </div>
  )
}

export default TransferToSaving