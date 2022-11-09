import { useState } from "react"

interface ButtonProps {
    name: string,
}

export default function Button(props: ButtonProps) {
    const [date, setDate] = useState(new Date());
    const handleClick = () => {
        setDate(new Date());
    }
    return (
        <>
        <p>{date.toLocaleTimeString()}</p>
        <button onClick={handleClick} type="button">{props.name}</button>
        </>
    )
}