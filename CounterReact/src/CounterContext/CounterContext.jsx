import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const incrementA = () => setCounterA(prev => prev + 1);
    const incrementB = () => setCounterB(prev => prev + 1);

    return (
        <CounterContext.Provider value={{ counterA, counterB, incrementA, incrementB }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    return useContext(CounterContext);
};