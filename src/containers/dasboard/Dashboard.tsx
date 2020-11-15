import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRain } from '../../store/actions';
import Slider from '../../components/slider/Slider';
import AmountOfRainfallChart from '../../components/amountOfRainfallChart/AmountOfRainfallChart';
import ChanceOfRainChart from '../../components/chanceOfRainChart/ChanceOfRainChart';
import styles from './Dashboard.module.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/root-reducer';
import { DayAmountPairType } from '../../types/types';
import Loader from '../../components/loader/Loader';

function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRain());
  }, [dispatch]);

  const upcomingRain = useSelector<InitialState>(
    state => state.nextDaysOfRain[0].days
  ) as DayAmountPairType[];

  const dataLoaded = upcomingRain.length > 0;

  function DisplayDashboard(): JSX.Element {
    return (
      <>
        <Slider name="Pressure" min={970} max={1030} units="hPa." />
        <ChanceOfRainChart />
        <Slider name="Temperature" min={10} max={35} units="°C." />
        <AmountOfRainfallChart />
      </>
    );
  }

  return (
    <div className={styles.Dashboard}>
      <Header />
      <div className={styles.Grid}>
      {dataLoaded
        ? <DisplayDashboard />
        : <Loader />
      }
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;