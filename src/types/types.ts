export interface SliderDataType {
  name: string;
  value: number;
}

export type UpcomingRainType = [
  { 
    request: string; 
    days: DayAmountPairType[]; 
  }
]

export interface DayAmountPairType {
  day: number | string;
  amount: number;
}

export interface ChanceOfRainChartElementType {
  day: string;
  lower: number;
  mean: number;
  upper: number;
}