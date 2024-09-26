import React from 'react';
import { CounterProvider } from '../CounterContext/CounterContext';
import ComponentA from '../ComponentA/ComponentA';
import ComponentB from '../ComponentB/ComponentB';
import '../App.css'; 

function App() {
    return (
        <CounterProvider>
            <div className="root">
                <div className="card">
                    <h1>Counter Component</h1>
                    <ComponentA />
                    <ComponentB />
                </div>
            </div>
        </CounterProvider>
    );
}

export default App;