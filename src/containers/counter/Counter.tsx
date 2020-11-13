import React from 'react';
import Count from '../../components/count/Count'
import CounterControls from '../../components/counterControls/CounterControls'

function Counter(): JSX.Element {

    return (
        <div>
            counter
            <Count/>
            <CounterControls/>
        </div>
    );
}

export default Counter;