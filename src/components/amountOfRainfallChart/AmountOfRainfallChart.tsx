import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/root-reducer';
import { DayAmountPairType } from '../../types/types';

function AmountOfRainfallChart(): JSX.Element {

  const upcomingRain = useSelector<InitialState>(
    state => state.nextDaysOfRain[0].days
  ) as DayAmountPairType[];

  upcomingRain.forEach((element) => element.day = 'day ' + element.day);

  return (
    <div className="Chart">
      <h2>
        Amount of rainfall chart
      </h2>
      <BarChart
        width={500}
        height={250}
        data={upcomingRain}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis label={{ value: 'Amount (L/m2)', angle: -90, position: 'insideLeft', dy: 50 }} />
        <Tooltip />
        <Bar dataKey="amount" fill="#0575ff" />
      </BarChart>
    </div>
  );
}

export default AmountOfRainfallChart;