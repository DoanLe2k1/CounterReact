import React from 'react';
import { useCounter } from '../CounterContext/CounterContext';

const ComponentA = () => {
    const { counterA, incrementA } = useCounter();

    return (
        <div>
            <h1>Component A: {counterA}</h1>
            <button onClick={incrementA}>Increase A</button>
            <div className="component-b-wrapper"></div>
        </div>
    );
};

export default ComponentA;