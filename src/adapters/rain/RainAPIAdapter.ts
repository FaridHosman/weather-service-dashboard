import { from, Observable, of } from "rxjs";
import { map, flatMap, catchError } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch'
import { APIError } from "../base/APIError";
import { RainEntity } from "./RainAPIModel";
import { Either, right, left } from 'fp-ts/lib/Either'


export interface IRainAPIAdapter {
  findNextDaysOfRain(): Observable<Either<APIError, RainEntity>>;
}

class RainAdapter implements IRainAPIAdapter {

  processResponse<T>(res: Response): Observable<Either<APIError, T>> {
    if (res.ok) {
      return from(res.json()).pipe(map(json => right(json as T)));
    } else {
      return of(left({ message: `Error: ${res.status}`, code: res.status }));
    }
  }

  findNextDaysOfRain(): Observable<Either<APIError, RainEntity>> {
    const url = 'http://private-4945e-weather34.apiary-proxy.com/weather34/rain';

    return fromFetch(url).pipe(
      flatMap(res => this.processResponse<RainEntity>(res)),
      catchError(err => of(left({ message: `Error: ${err}`, code: 0 })))
    );
  }
}

export const buildRainDatabaseAdapter: () => IRainAPIAdapter = () => new RainAdapter();