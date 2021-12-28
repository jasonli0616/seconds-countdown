import React from 'react';
import './Titlebar.css';

export default function Titlebar() {
    return (
        <div className="titlebar">
            <h1 style={{ cursor: 'pointer' }} onClick={() => {
                window.location.href = `${new URL(window.location.href).origin}/seconds-countdown`;
            }}>
            Seconds Countdown
            </h1>
        </div>
    );
};