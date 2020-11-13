import {
    GET_EXAMPLE,SET_EXAMPLE,
    ADD_EXAMPLE,
    CHANGE_EXAMPLE
} from './constants';
import { ExampleType } from '../types/types';

export function getExample() {
    return {
        type: GET_EXAMPLE
    };
}

export function setExample(payload: ExampleType) { 
    return {
        payload: payload.example,
        type: SET_EXAMPLE
    };
}

export function addExample() {
    return {
        type: ADD_EXAMPLE
    };
}

export function changeExample() {
    return {
        type: CHANGE_EXAMPLE
    };
}