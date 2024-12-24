import React, { useState, useEffect } from 'react';

const DreamsAndGoals = () => {
    const [dreams, setDreams] = useState(() => {
        const savedDreams = localStorage.getItem('dreams');
        return savedDreams ? JSON.parse(savedDreams) : [
            "Travel to Japan together",
            "Buy our dream home",
            "Start a small garden",
            "Learn a new language as a couple"
        ];
    });
    const [newDream, setNewDream] = useState("");

    useEffect(() => {
        localStorage.setItem('dreams', JSON.stringify(dreams));
    }, [dreams]);

    const addDream = () => {
        if (newDream.trim() !== "") {
            setDreams([...dreams, newDream]);
            setNewDream("");
        }
    };

    return (
        <div className='my-5 py-4'>
            <h1 className='display-4 fw-bold text-center'>Our Dreams & Goals</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {dreams.map((dream, index) => (
                    <li key={index} style={{
                        background: '#f3e5f5',
                        padding: '10px',
                        borderRadius: '8px',
                        margin: '10px 0',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}>
                        {dream}
                    </li>
                ))}
            </ul>
            <div className='d-grid gap-2 d-md-flex justify-content-md-start my-4'>

                <div className='col-12 col-md-8'>                 
                <input className='search form-control p-2 shadow-none'
                    type="text"
                    value={newDream}
                    onChange={(e) => setNewDream(e.target.value)}
                    placeholder="Add a new dream or goal"
                    style={{border: '1px solid #365c1e'}}
                />
                </div>
                <button className='btn secondary-btn col-12 col-md-4 p-2'
                    onClick={addDream}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default DreamsAndGoals;