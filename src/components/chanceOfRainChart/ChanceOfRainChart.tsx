import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/root-reducer';
import { DayAmountPairType, ChanceOfRainChartElementType } from '../../types/types';

function ChanceOfRainChart(): JSX.Element {
  const state = useSelector<InitialState>(
    state => state
  ) as InitialState;

  const upcomingRain: DayAmountPairType[] = state.nextDaysOfRain[0].days;
  const pressure: number = state.Pressure;
  const temperature: number = state.Temperature;
  let chancePerDay: ChanceOfRainChartElementType[] = [];

  function calcChanceOfRain(pressure: number, temperature: number, amount: number): number[] {
    const score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - 9);
    const mean = parseFloat(Math.min(Math.max(score, 0), 100).toFixed(3));
    const upper = parseFloat(Math.min(1.5 * mean, 100).toFixed(3));
    const lower = parseFloat(Math.max(0.5 * mean, 0).toFixed(3));

    return [lower, mean, upper];
  }

  for (var day = 0; day < 7; day++) {
    const chance = calcChanceOfRain(pressure, temperature, upcomingRain[day]?.amount)
    const dayValue = day + 1;
    const element = {day: 'day ' + dayValue, lower: chance[0], mean: chance[1], upper: chance[2]};
    chancePerDay.push(element);
  }

  return (
    <div className="Chart">
      <h2>
        Chance of rain chart
      </h2>
      <LineChart
        width={500}
        height={250}
        data={chancePerDay}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis label={{ value: 'Probability (%)', angle: -90, position: 'insideLeft', dy: 50 }} domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="lower" stroke="#8884d8" />
        <Line type="monotone" dataKey="mean" stroke="#82ca9d" />
        <Line type="monotone" dataKey="upper" stroke="#ffca9d" />
      </LineChart>
    </div>
  );
}

export default ChanceOfRainChart;