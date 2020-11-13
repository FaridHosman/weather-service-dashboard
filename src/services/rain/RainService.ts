import { Observable, throwError, of } from 'rxjs';
import { IRainAPIAdapter, buildRainDatabaseAdapter } from '../../adapters/rain/RainAPIAdapter';
import { flatMap } from 'rxjs/operators';
import { Rain } from './Rain';

export interface IRainAPIService {
  findNextDaysOfRain(): Observable<Rain>
}

class RainService implements IRainAPIService {
  rainAdapter: IRainAPIAdapter = buildRainDatabaseAdapter();

  findNextDaysOfRain(): Observable<Rain> {
    return this.rainAdapter.findNextDaysOfRain().pipe(
      flatMap(upcomingRain => upcomingRain._tag === 'Right' ?
        of(upcomingRain.right) : throwError(upcomingRain.left))
    );
  }
}

export const rainServiceBuilder = () => new RainService();