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
  currentQuarter: string;
  previousQuarter: string;
  currentQuarterRevenue: number;
  previousQuarterRevenue: number;
  quarterlyGrowth: string;
}
export interface QuarterlyRevenueState {
  quarterlyRevenue: IQuarterlyRevenue;
  loading: boolean;
  error: string | null;
}

export interface IHalfYearlyRevenue {
  currentHalfYear: string;
  previousHalfYear: string;
  currentHalfYearRevenue: number;
  previousHalfYearRevenue: number;
  halfYearlyGrowth: string;
}
export interface HalfYearlyRevenueState {
  halfYearlyRevenue: IHalfYearlyRevenue;
  loading: boolean;
  error: string | null;
}
