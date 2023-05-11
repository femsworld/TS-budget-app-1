import React, { useEffect, useState } from 'react'

  interface TargetProps {
    getTotalTarget: (target: number) => void
    totalTransfer: number
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
        const [progress, setProgress] = useState(0);
        const amountOfTarget = useInput()
        const printData = (e: React.FormEvent) => {
            e.preventDefault()
            if (amountOfTarget.value === "") {
                setTarget(0);
            } else {
            setTarget(parseInt(amountOfTarget.value));
        }
    }
        const CurrentProgress = (props: TargetProps) => {
        
    //   return (
    //     <div>Progress: {currentProgress}EUR</div>
    //   )
    console.log("This is the amountOgTarget", amountOfTarget)
    
    
    }
    useEffect(() => {
        const currentProgress = ((props.totalTransfer) / (parseInt(amountOfTarget.value)))*100
        setProgress(currentProgress)
        console.log("This is progress", progress)
      }, [amountOfTarget]);
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
            <p>Current Savings: {props.totalTransfer}EUR</p>
            <p>Target: {target}EUR</p>
            <p>Progress: {progress}%</p>
            {/* <div>Progress: {CurrentProgress}EUR</div> */}
            {/* <div>Progress: {CurrentProgress}EUR</div> */}   
        </form>
        </div>
  )
}

export default SetTargetAmount