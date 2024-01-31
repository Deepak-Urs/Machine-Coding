import { useState } from "react"

const Pomodoro = () => {
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(2)

    const startTimer = () => {
        let totalTime = min * 6
        setMin(min - 1)
        setSec(9)
        const timer = setInterval(() => {
            totalTime -= 1
            console.log('totalTime value', totalTime);

            let temp = totalTime % 6
            let tempMin = Math.round(totalTime / 6)

            if (temp === 0 && min > 0) {
                setMin(tempMin - 1)
                setSec(59)
            }
            else if (temp < 0) {
                setMin(0)
                setSec(0)
                stopTimer(timer)
                alert('Timer completed!')
            }
            else {
                setSec(temp - 1)
            }

        }, 1000)
    }

    const pauseTimer = (timer) => {
        
    }

    const stopTimer = (timer) => {
        clearInterval(timer)
    }

    const resetTimer = () => {
        setMin(0)
        setSec(0)
    }

    return (
        <div className="wrapper">
            <h4>Pomodoro Timer</h4>
            <div className="timer">
                {min}:{sec}
            </div>
            <div className="actions">
                <button onClick={() => startTimer()}>Play</button>
                <button>Pause</button>
                <button onClick={() => resetTimer()}>Reset</button>
            </div>
        </div>
    )
}

export default Pomodoro
