import { useState } from 'react';
import './Countdown.css';

export default function Countdown(props) {
    if (props.title)
        document.title = `${props.title} - Seconds Countdown`;

    const getSeconds = () => {
        // Get current time in Unix time
        let current_time = Math.round(new Date().getTime() / 1000);
        let countdown_time = Math.round(new Date(props.date).getTime() / 1000);
        return countdown_time - current_time;
    }

    const [seconds, setSeconds] = useState(getSeconds())

    setInterval(() => {
        setSeconds(getSeconds());
    }, 1000)

    return (
        <div className="countdown">
            <h2>{props.title}</h2>
            <h1>{seconds}</h1>
            <p>until {new Date(props.date).toLocaleString()}</p>
        </div>
    );
};