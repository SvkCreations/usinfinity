import React, { useState, useEffect } from 'react';

const DreamsAndGoals = () => {
    const [dreams, setDreams] = useState(() => {
        const savedDreams = localStorage.getItem('dreams');
        return savedDreams ? JSON.parse(savedDreams) : [
            "Roam around Kolkata at night",
            "Decorate our own house together",
            "Get married",
            "Buy a couple t-shirt"
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
            <h1 className='display-4 fw-bold text-center' data-aos="fade-up">Our Dreams & Goals</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {dreams.map((dream, index) => (
                    <li className='fw-bold' data-aos="fade-up" key={index} style={{
                        background: '#90B494',
                        padding: '10px',
                        color:'black',
                        borderRadius: '8px',
                        margin: '10px 0',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}>
                        {index+1}. {dream}
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