import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSliderValue } from '../../store/actions';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/root-reducer';
import styles from './Slider.module.scss';

type SliderProps = {
  name: "Pressure" | "Temperature",
  min: number,
  max: number,
  units: "hPa." | "°C.",
}

function Slider(props: SliderProps): JSX.Element {
  const { name, min, max, units } = props;

  const startingValue = useSelector<InitialState>(
    state => state[name]
  ) as number;

  const [value, setValue] = useState(startingValue);
  const dispatch = useDispatch();
  const changeValue = useCallback(
    (value) => dispatch(setSliderValue(value)),
    [dispatch]
  );

  function onSliderChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(event.target.value));
    changeValue(event.target)
  }

  return (
    <div className={styles.SliderContainer}>
      <label>{name}</label>
      <p>{value} {units}</p>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={(event) => onSliderChange(event)}
      />
    </div>
  )
}

export default Slider;