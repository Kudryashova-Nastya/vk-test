import React from "react";

export default function Timer(props) {
    return (
        <div className="timer">
            {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
        </div>
    );
}