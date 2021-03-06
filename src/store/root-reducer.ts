
import { Action, Reducer } from 'redux';
import {
  GET_RAIN,
  SET_RAIN,
  SET_SLIDER_VALUE,
} from './constants'
import { DayAmountPairType, SliderDataType, UpcomingRainType } from '../types/types';

export interface InitialState {
  Pressure: number;
  Temperature: number;
  nextDaysOfRain: [
    {
      request: string;
      days: DayAmountPairType[];
    }
  ];
}

export const initialState: InitialState = {
  Pressure: 1000,
  Temperature: 23,
  nextDaysOfRain: [
    {
      request: '',
      days:[],
    }
  ]
};

export interface DispatchAction extends Action {
  payload: Partial<InitialState>;
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_RAIN:
      return { ...state };

    case SET_RAIN:
      const nextDaysOfRain = action.payload as UpcomingRainType;
      return {
        ...state,
        nextDaysOfRain
      };

    case SET_SLIDER_VALUE:
      const { name, value } = action.payload as SliderDataType;
      return {
        ...state,
        ...{ [name]: value },
      }

    default:
      return initialState;
  }
};