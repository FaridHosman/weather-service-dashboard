import { RouteComponentProps } from 'react-router';

export interface RoutePathComponent {
    path: string;
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
}

export interface SliderDataType {
  name: string;
  value: number;
}

export interface UpcomingRainType {
  nextDaysOfRain: [
    {
      request: string;
      days: DayAmountPair;
    }
  ]
}

interface DayAmountPair {
  day: number;
  amount: number;
}