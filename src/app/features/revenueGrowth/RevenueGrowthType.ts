export interface IMonthlyRevenue {
  currentMonthRevenue: number;
  previousMonthRevenue: number;
  monthlyGrowth: string;
}
export interface MonthlyRevenueState {
  monthlyRevenue: IMonthlyRevenue;
  loading: boolean;
  error: string | null;
}

export interface IQuarterlyRevenue {
  currentQuarter: number;
  previousQuarter: number;
  currentQuarterRevenue: number;
  previousQuarterRevenue: number;
  quarterlyGrowth: string;
}
export interface QuarterlyRevenueState {
  quarterlyRevenue: IQuarterlyRevenue;
  loading: boolean;
  error: string | null;
}
