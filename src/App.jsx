import React, { useEffect, useState } from "react";
import Greeter from "./components/Greeter";

const App = () => {
    const [ username, setUsername ] = useState('');
    const [ loaded, setLoaded] = useState(false);

    const handleToggle = () => {
        setLoaded(!loaded);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, [loaded]);
    
    if (loaded == false) {
        return (
            <>
            <h2>Website loading...</h2>
            <button onClick={handleToggle}>Loaded?</button>
            </>
        );
    };
    return (
        <>
        <h2 style={{ backgroundColor: 'lightgrey'}}><Greeter phrase="Good morning" name="Altair" /></h2>
        <h2 style={{ backgroundColor: 'lightgrey'}}><Greeter phrase="Good evening" name="Rose" /></h2>
        <h2 style={{ backgroundColor: 'lightgrey'}}><Greeter phrase="Pleased to make your acquaintance" name="Tycho" /></h2>
        <input value={username} onChange={e => setUsername(e.target.value)} />
        <p>You are logging in as: {username}</p>
        </>
    );
};

export { App };