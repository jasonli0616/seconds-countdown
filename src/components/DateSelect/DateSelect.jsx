import { useState } from 'react';
import './DateSelect.css';

export default function DateSelect(props) {

    const [title, setTitle] = useState(props.title);
    const [date, setDate] = useState(props.date);

    return (
        <div className="date-select">
            <h3>Create a new countdown</h3>

            {/* Countdown title input */}
            <div>
                <label htmlFor="countdown-title-input">Countdown title: </label>
                <input type="text" id="countdown-title-input" placeholder="(optional)" defaultValue={title}
                    // Update state
                    onChange={(event) => {
                        event.preventDefault();
                        setTitle(event.target.value);
                    }}
                />
            </div>
            {/* Countdown date input */}
            <div>
                <label htmlFor="countdown-title-input">Countdown date: </label>
                <input type="datetime-local" id="countdown-date-input" style={{ cursor: 'pointer' }} defaultValue={date}
                    // Update state
                    onChange={(event) => {
                        event.preventDefault();
                        setDate(event.target.value);
                    }}
                />
            </div>

            <button onClick={(event) => {
                // Start countdown
                if (date) {
                    // Add date parameter to URL
                    let url = new URL(window.location.href);
                    url.searchParams.set('date', date)

                    // Add title parameter to URL
                    if (title)
                        url.searchParams.set('title', title)
                    else
                        url.searchParams.delete('title')

                    // Redirect
                    window.location.href = url;
                } else
                    alert('No date selected');
            }}>
                Start countdown
            </button>

        </div>
    );
};