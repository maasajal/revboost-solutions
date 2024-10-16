export interface ExpenseEntry {
  expenseId: string;
  item: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface ExpenseCollection {
  userId: string;
  userEmail: string;
  expenseEntries: ExpenseEntry[];
}

export interface ExpenseState {
  expenseCollection: ExpenseCollection | null;
  loading: boolean;
  error: string | null;
}
