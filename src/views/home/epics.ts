import { GET_EXAMPLE, CHANGE_EXAMPLE } from "../../store/constants";
import { setExample } from "../../store/actions";
import { mergeMap, map } from "rxjs/operators";
import { exampleServiceBuilder } from "../../services/example/ExampleService";
import { ofType, ActionsObservable } from 'redux-observable';
import { Action } from 'redux';

const example = exampleServiceBuilder();

export const getExampleEpic = ( actions$: ActionsObservable<Action> ) => actions$.pipe(
    ofType(GET_EXAMPLE),
    mergeMap(_ =>
        example.findExample()
        .pipe(
            map(setExample)
        ))
);

export const changeExampleEpic = ( actions$: ActionsObservable<Action> ) => actions$.pipe(
    ofType(CHANGE_EXAMPLE),
    mergeMap(_ =>
        example.randomExample()
        .pipe(
            map(setExample)
        ))
);