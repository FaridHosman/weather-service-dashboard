import { Observable, throwError, of } from 'rxjs';
import { IExampleAPIAdapter, buildExampleDatabaseAdapter } from '../../adapters/example/ExampleAPIAdapter';
import { flatMap } from 'rxjs/operators';
import { Example } from './Example';

export interface IExampleAPIService {
    findExample(): Observable<Example>;
    randomExample(): Observable<Example>;
}

class ExampleService implements IExampleAPIService{
    exampleAdapter: IExampleAPIAdapter = buildExampleDatabaseAdapter();

    findExample(): Observable<Example> {
        return this.exampleAdapter.findExample().pipe(
            flatMap(stats => stats._tag === 'Right' ? of(stats.right) : throwError(stats.left))
        );
    }

    randomExample(): Observable<Example> {
        return this.exampleAdapter.randomExample().pipe(
            flatMap(stats => stats._tag === 'Right' ? of(stats.right) : throwError(stats.left))
        );
    }
}

export const exampleServiceBuilder = () => new ExampleService();