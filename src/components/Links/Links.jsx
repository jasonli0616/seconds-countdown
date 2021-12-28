import React from 'react';
import './Links.css';
import { BoxArrowInDown, Github } from 'react-bootstrap-icons';

export default function Links() {
    return (
        <div className="links">

            <button onClick={() => {
                try {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Copied countdown URL');
                } catch {
                    alert('An error has occured');
                }
            }}>
                <BoxArrowInDown /> Share this countdown
            </button>

            <button onClick={() => {
                try {
                    window.open('https://github.com/jasonli0616/seconds-countdown', '_blank').focus()
                } catch {
                    alert('An error has occured');
                }
            }}>
                <Github /> Contribute on GitHub
            </button>

        </div>
    );
};