import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRain } from '../../store/actions';
import Slider from '../../components/slider/Slider';
import AmountOfRainfallChart from '../../components/amountOfRainfallChart/AmountOfRainfallChart';
import ChanceOfRainChart from '../../components/chanceOfRainChart/ChanceOfRainChart';
import styles from './Dashboard.module.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRain());
  }, [dispatch]);

  return (
    <div className={styles.Dashboard}>
      <Header />
      <div className={styles.Grid}>
        <Slider name="Pressure" min={970} max={1030} defaultValue={1000} units="hPa." />
        <ChanceOfRainChart />
        <Slider name="Temperature" min={10} max={35} defaultValue={23} units="°C." />
        <AmountOfRainfallChart />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;