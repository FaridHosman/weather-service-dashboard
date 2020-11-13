
import { Action, Reducer } from 'redux';
import {
  GET_RAIN,
  SET_RAIN,
} from './constants'
import { UpcomingRainType } from '../types/types';

export interface InitialState { // TODO: Define initial state
  
}

export const initialState: InitialState = {
  
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

    default:
      return initialState;
  }
};