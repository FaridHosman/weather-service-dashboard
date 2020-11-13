import { combineEpics } from 'redux-observable';
import { getExampleEpic, changeExampleEpic } from '../views/home/epics';

export const rootEpic = combineEpics(
    getExampleEpic,
    changeExampleEpic
);
