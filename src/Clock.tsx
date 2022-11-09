import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date())
    let hour: string = time.getHours().toString().padStart(2,"0");
    let minute: string = time.getMinutes().toString().padStart(2,"0");
    let second: string = time.getSeconds().toString().padStart(2,"0");

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000);
    },[]);
    return (
        <div>
            <p>{hour}:{minute}:{second}</p>
        </div>
    );
}