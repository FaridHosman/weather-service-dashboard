import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRain } from '../../store/actions';
import logo from '../../logo.svg';

function Home(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRain());
  }, [dispatch]);

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Home;