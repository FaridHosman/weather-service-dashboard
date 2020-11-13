import React, { useCallback } from 'react';
import { addExample, changeExample } from '../../store/actions';
import { useDispatch } from 'react-redux';

function CounterControls(): JSX.Element {
    const dispatch = useDispatch();
    const incrementCounter = useCallback(
        () => dispatch(addExample()),
        [dispatch]
    );
    const changeCounter = useCallback(
        () => dispatch(changeExample()),
        [dispatch]
    )

    return (
        <div>
            <button onClick={incrementCounter}>Add</button>
            <button onClick={changeCounter}>Change</button>
        </div>
    );
}

export default CounterControls;