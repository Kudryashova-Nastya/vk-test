import React from "react";
import Button from '@mui/material/Button';

export default function Buttons(props) {
    const StartButton = (
        <Button size="large" variant="outlined"
                onClick={props.handleStart}>
            Старт
        </Button>
    );
    const ActiveButtons = (
        <div className="btn-group">
            <Button size="large" variant="outlined"
                    onClick={props.handleReset}>
                Сброс
            </Button>
            <Button size="large" variant="outlined"
                    onClick={props.handlePauseResume}>
                {props.isPaused ? "Приостановка" : "Стоп"}
            </Button>
        </div>
    );

    return (
        <>{props.active ? ActiveButtons : StartButton}</>
    );
}