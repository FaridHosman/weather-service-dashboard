import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRain } from '../../store/actions';
import logo from '../../logo.svg';
import Slider from '../../components/slider/Slider';
import AmountOfRainfallChart from '../../components/amountOfRainfallChart/AmountOfRainfallChart';

function Home(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRain());
  }, [dispatch]);

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <Slider name="Pressure" min={10} max={100} units="hPa."/>
      <AmountOfRainfallChart />
    </div>
  );
}

export default Home;