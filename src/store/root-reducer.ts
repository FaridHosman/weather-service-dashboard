
import { Action, Reducer } from 'redux';
import {
    GET_EXAMPLE,
    SET_EXAMPLE,
    ADD_EXAMPLE,
    CHANGE_EXAMPLE
} from './constants'
import { ExampleType, ExampleCounter } from '../types/types';

export interface InitialState extends ExampleType {
    example: ExampleCounter,
    otherSampleField: any
}

export const initialState: InitialState = {
    example: {
        exampleCounter: -1
    },
    otherSampleField: {}
};

export interface DispatchAction extends Action {
    payload: Partial<InitialState>;
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case GET_EXAMPLE:
            return { ...state };

        case SET_EXAMPLE:
            const payload = action.payload as ExampleCounter;
            return {
                ...state,
                example: payload
            };

        case ADD_EXAMPLE:
            const prevCount = state.example?.exampleCounter;
            const newCount = prevCount + 1
            return {
                ...state,
                example: {
                    exampleCounter: newCount
                }
            };

        case CHANGE_EXAMPLE:
            return { ...state };

        default:
            return initialState;
    }
};