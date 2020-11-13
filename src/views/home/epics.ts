import { GET_RAIN } from "../../store/constants";
import { setRain } from "../../store/actions";
import { mergeMap, map } from "rxjs/operators";
import { ofType, ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { rainServiceBuilder } from "../../services/rain/RainService";


const rain = rainServiceBuilder();

export const getRainEpic = (actions$: ActionsObservable<Action>) => actions$.pipe(
  ofType(GET_RAIN),
  mergeMap(_ =>
    rain.findNextDaysOfRain().pipe(
      map(setRain)
    ))
);