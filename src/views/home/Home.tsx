import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getExample } from '../../store/actions';
import logo from '../../logo.svg';
import Counter from '../../containers/counter/Counter'

function Home(): JSX.Element {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExample());
    }, [dispatch]);

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Counter/>
        </div>
    );
}

export default Home;