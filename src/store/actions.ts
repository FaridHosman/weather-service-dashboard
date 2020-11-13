import {
    GET_RAIN,
    SET_RAIN,
    SET_SLIDER_VALUE,
} from './constants';
import { SliderDataType, UpcomingRainType } from '../types/types';

export function getRain() {
  return {
    type: GET_RAIN
  };
}

export function setRain(payload: UpcomingRainType) { 
  return {
    payload: payload,
    type: SET_RAIN
  };
}

export function setSliderValue(payload: SliderDataType) {
  return {
    payload: payload,
    type: SET_SLIDER_VALUE
  }
}