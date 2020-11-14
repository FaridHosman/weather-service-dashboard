export type  RainEntity = [
  { 
    request: string; 
    days: DayAmountPair[]; 
  }
]

interface DayAmountPair {
  day: number;
  amount: number;
}