import { RouteComponentProps } from 'react-router';

export interface RoutePathComponent {
    path: string;
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
}

export interface ExampleType {
    example?: ExampleCounter
    otherSampleField?: any
}

export interface ExampleCounter {
    exampleCounter: number
}