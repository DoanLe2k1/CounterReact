import React from 'react';
import { useCounter } from '../CounterContext/CounterContext';

const ComponentB = () => {
    const { counterB, incrementB, incrementA } = useCounter();

    return (
        <div>
            <h1>Component B: {counterB}</h1>
            <button onClick={incrementB}>Increase B</button>
            <button onClick={incrementA}>Increase A</button>
        </div>
    );
};

export default ComponentB;