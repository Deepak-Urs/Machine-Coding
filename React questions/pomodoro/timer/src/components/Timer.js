import { useState, useEffect } from "react";

// time in MS to HMS
const SEC = 1000;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

const getFomattedTime = (time) => {
    const days = Math.floor(time/DAY);
    const hours = Math.floor((time%DAY)/HOUR);
    const minutes = Math.floor((time%HOUR)/MIN);
    const seconds = Math.floor((time%MIN)/SEC);

    return `${days}: ${hours}: ${minutes}: ${seconds}`;

}


const Timer = ({duration, onExpire}) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time-1000);
        }, 1000)

        if(time <= 0) {
            onExpire && onExpire();
            clearTimeout(timer);
        }

        return () => clearTimeout(timer)
    }, [time, onExpire])

    return getFomattedTime(time);
}

Timer.defaultProps = {
    duration: 6 * 1000
}

export default Timer;