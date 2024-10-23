export interface InvoiceItem {
    id: string;
    item: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }
  
  export interface InvoiceData {
    id: string;
    customerName: string;
    companyName: string;
    invoiceNumber: string;
    date: string;
    customerAddress: string;
    items: InvoiceItem[];
  }
  
  export interface InvoiceState {
    invoices: InvoiceData[];
    loading: boolean;
    error: string | null;
  }
  