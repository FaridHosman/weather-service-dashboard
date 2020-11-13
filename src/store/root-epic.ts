import { combineEpics } from 'redux-observable';
import { getRainEpic } from '../views/home/epics';

export const rootEpic = combineEpics(
  getRainEpic,
);
