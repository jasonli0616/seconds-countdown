import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Countdown from './components/Countdown/Countdown';
import DateSelect from './components/DateSelect/DateSelect';
import Links from './components/Links/Links';
import Titlebar from './components/Titlebar/Titlebar';

export default function App() {

    let [searchParams, setSearchParams] = useSearchParams();
    // Get URL date query
    let [countdownDate, setCountdownDate] = useState(searchParams.get('date'));
    // Get URL title query
    let [countdownTitle, setCountdownTitle] = useState(searchParams.get('title'));

    return (
        <>
            <Titlebar />

            {/* If countdown */}
            {countdownDate ? <Countdown date={countdownDate} title={countdownTitle} /> : null}

            <DateSelect date={countdownDate} title={countdownTitle} />
            <Links />
        </>
    );
};