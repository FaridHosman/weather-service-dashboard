
import { Action, Reducer } from 'redux';
import {
  GET_RAIN,
  SET_RAIN,
  SET_SLIDER_VALUE,
} from './constants'
import { SliderDataType, UpcomingRainType } from '../types/types';

export interface InitialState {
  Pressure: number;
  Temperature: number;
}

export const initialState: InitialState = {
  Pressure: -1,
  Temperature: -1
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
      const rain = action.payload as UpcomingRainType;
      return {
        ...state,
        rain
      };

    case SET_SLIDER_VALUE:

      const { name, value } = action.payload as SliderDataType;
      console.log({ [name]: value });
      const SliderData = { [name]: value }

      return {
        ...state,
        ...SliderData,
      }

    default:
      return initialState;
  }
};