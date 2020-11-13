import { from, of } from "rxjs";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Either, right, left } from 'fp-ts/lib/Either'
import { APIError } from "../base/APIError";
import { ExampleEntity } from "./ExampleAPIModel";

export interface IExampleAPIAdapter {
    findExample(): Observable<Either<APIError, ExampleEntity>>;
    randomExample(): Observable<Either<APIError, ExampleEntity>>;
}

class ExampleAdapter implements IExampleAPIAdapter {

    processResponse<T>(res: Response): Observable<Either<APIError, T>> {
        if(res.ok) {
            return from(res.json()).pipe(map(json => right(json as T)));
        } else {
            return of( left({ message: `Error: ${res.status}`, code: res.status }));
        }
    }

    findExample(): Observable<Either<APIError, ExampleEntity>> {
        // Add URL here 
        return of(right({
            example: {
                exampleCounter: 0
            },
        }));
        // Use return fromFetch(url).pipe( ... (import { fromFetch } from 'rxjs/fetch')
        // and manage response with RxJs
    }

    randomExample(): Observable<Either<APIError, ExampleEntity>> {
        const newCounter = Math.floor(Math.random() * Math.floor(10))
        return of(right({
            example: {
                exampleCounter: newCounter
            },
        }));
    }
}

export const buildExampleDatabaseAdapter: () => IExampleAPIAdapter = () => new ExampleAdapter();