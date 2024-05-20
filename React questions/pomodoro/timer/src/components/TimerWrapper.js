import { useState } from "react"
import Timer from "./Timer";

const TimerWrapper = ({duration, onExpire, beforeRestart}) => {
    const [hasExpired, setHasExpired] = useState(false);

    const onExpireHelper = () => {
        onExpire && onExpire();
        setHasExpired(true)
    }
    
    const handleRestart = () => {
        setHasExpired(false)
    }

    return !hasExpired ? (<Timer duration={duration} onExpire={onExpireHelper}/>): <button onClick={handleRestart}>Restart</button>
}

export default TimerWrapper;