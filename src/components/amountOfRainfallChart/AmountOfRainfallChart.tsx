import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/root-reducer';
import { DayAmountPair } from '../../types/types';

function AmountOfRainfallChart(): JSX.Element {

  const upcomingRain = useSelector<InitialState>(
    state => state.nextDaysOfRain[0].days
  ) as DayAmountPair[];

  upcomingRain.forEach((element) => element.day = 'day ' + element.day)

  return (
    <BarChart
      width={700}
      height={300}
      data={upcomingRain}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
}

export default AmountOfRainfallChart;