import React, {useState, useEffect} from 'react'
import { NumericLiteral } from 'typescript'

interface TransferProps {
    totalTransferAmount: (transfer: number) => void
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
    const [transferList, setTransferList] = useState([]);
    const [transfer, setTransfer] = useState(0);
        const amountOfTransfer = useInput()
        const printData = (e: React.FormEvent) => {
            e.preventDefault()
            if (amountOfTransfer.value === "") {
                setTransfer(0);
            } else {
                setTransfer(parseInt(amountOfTransfer.value, 10));
        }
    }
    //     const newTransfer = {
    //         amount: amountOfTransfer.value,
    //     // setTransferList([...transferList, newTransfer])
    //     // setTransfer([...transfer, newTransfer])
    //     setTransfer(transfer: NumericLiteral)
    // }

    useEffect(() => {
        let totalTransfer: number = 0
        for(let item of transferList) {
            totalTransfer= Number(item)
        }
        props.totalTransferAmount(totalTransfer)
      }, [transferList]);
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