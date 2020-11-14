import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSliderValue } from '../../store/actions';
import styles from './Slider.module.scss';

type SliderProps = {
  name: "Pressure" | "Temperature",
  min: number,
  max: number,
  defaultValue: number,
  units: "hPa." | "°C.",
}

function Slider(props: SliderProps): JSX.Element {
  const { name, min, max, defaultValue,  units } = props;

  const [value, setValue] = useState(defaultValue);
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