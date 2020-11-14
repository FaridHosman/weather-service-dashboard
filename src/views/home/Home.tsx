import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRain } from '../../store/actions';
import Slider from '../../components/slider/Slider';
import AmountOfRainfallChart from '../../components/amountOfRainfallChart/AmountOfRainfallChart';

function Home(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRain());
  }, [dispatch]);

  return (
    <div>
      <Slider name="Pressure" min={970} max={1030} units="hPa."/>
      <Slider name="Temperature" min={10} max={35} units="°C."/>
      <AmountOfRainfallChart />
    </div>
  );
}

export default Home;