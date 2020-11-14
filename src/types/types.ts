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

export type UpcomingRainType = [
  { 
    request: string; 
    days: DayAmountPair[]; 
  }
]

export interface DayAmountPair {
  day: number | string;
  amount: number;
}

export interface ChanceOfRainChartElement {
  day: string;
  lower: number;
  mean: number;
  upper: number;
}