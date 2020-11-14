import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/root-reducer';
import { DayAmountPair } from '../../types/types';

function AmountOfRainfallChart(): JSX.Element {

  const upcomingRain = useSelector<InitialState>(
    state => state.nextDaysOfRain[0].days
  ) as DayAmountPair[];

  upcomingRain.forEach((element) => element.day = 'day ' + element.day);

  return (
    <>
      <h1>
        Amount of rainfall chart
      </h1>
      <BarChart
        width={700}
        height={300}
        data={upcomingRain}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis label={{ value: 'Amount (L/m2)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </>
  );
}

export default AmountOfRainfallChart;