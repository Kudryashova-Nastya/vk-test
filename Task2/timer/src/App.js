import './App.css';
import {useState, useEffect} from "react";
import Timer from "./Timer";
import Buttons from "./Buttons";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function App() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div className="timer-body">
            <Card sx={{ minWidth: 600 }}>
                <CardContent>
                    <CardContent>
                        <h2>Секундомер</h2>
                        <Timer time={time} />
                        <Buttons
                            active={isActive}
                            isPaused={isPaused}
                            handleStart={handleStart}
                            handlePauseResume={handlePauseResume}
                            handleReset={handleReset}
                        />
                    </CardContent>
                </CardContent>
            </Card>

        </div>
    );
}

export default App;