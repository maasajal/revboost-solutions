export interface PaymentEntry {
  transactionId: string;
  payment_status: string;
  paymentDate: Date;
  due_date: Date;
  amount: number;
}

export interface PaymentsState {
  paymentEntries: PaymentEntry[];
  loading: boolean;
  error: string | null;
}

export interface AddPaymentPayload {
  userId: string;
  userEmail: string;
  paymentEntries: PaymentEntry[];
}
