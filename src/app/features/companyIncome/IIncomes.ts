export interface IIncomeEntry {
  incomeId: string;
  amount: number;
  source: string;
  date: Date;
}

export interface AddIncomePayload {
  userId: string;
  userEmail: string;
  incomeEntries: IIncomeEntry[];
}

export interface IncomesState {
  incomeEntries: IIncomeEntry[];
  loading: boolean;
  error: string | null;
}
