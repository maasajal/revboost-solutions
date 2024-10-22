export interface IMonthlyRevenue {
  currentMonthRevenue: number;
  previousMonthRevenue: number;
  growth: string;
}
export interface MonthlyRevenueState {
  monthlyRevenue: IMonthlyRevenue;
  loading: boolean;
  error: string | null;
}
