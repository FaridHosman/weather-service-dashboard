import {
    GET_RAIN,
    SET_RAIN,
} from './constants';
import { UpcomingRainType } from '../types/types';

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