import React, { useState } from 'react'

// type TargetData = {
//     amount: string;
//   }

  interface TargetProps {
    getTotalTarget: (target: number) => void
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

    const SetTargetAmount = (props: TargetProps) => {
        const [target, setTarget] = useState(0);
        const amountOfTarget = useInput()
        const printData = (e: React.FormEvent) => {
            e.preventDefault()
            if (amountOfTarget.value === "") {
                setTarget(0);
            } else {
            setTarget(parseInt(amountOfTarget.value));
        }
    }
    console.log(amountOfTarget.value)
  return (
    <div>
        <form onSubmit={printData}>
            <div>
                <label htmlFor="setTarget">Set Target</label> <br></br>
                <input
                    type="number"
                    name="amountOfTarget"
                    id="amountOfTarget"
                    {...amountOfTarget}
                />
                <button type="submit">Reset</button>
            </div>
            <p>Target: {target}EUR</p>
        
        </form>
        </div>
  )
}

export default SetTargetAmount