export interface RainEntity {
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