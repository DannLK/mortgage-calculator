export enum mortgageFormInputType{
  input = 'input',
  dropdown = 'dropdown'
}

export interface mortgageFormDropdownInterface{
  label: string;
  value: number;
}

export interface mortgageFormInputInterface{
  name: string;
  label: string;
  type: mortgageFormInputType;
  initialValue: number; 
  dropdownOptions?: mortgageFormDropdownInterface[];
  validationError?: string;
  maxLength?: number;
  maxValue?: number;
  postfix?: string;
}

export interface mortgageResultsInterface{
  numPayments: number;
  paymentFrequency: number;
  paymentAmount: number;
  principlePayment: number;
  interestPayment: number;
  totalPayment: number;
  term: number;
  numTermPayments: number;
  termPayment: number;
  principleTermPayment: number;
  interestTermPayment: number;
  totalTermPayment: number;
  termEndBalance: number;
  amortizationPeriodLabel: string;
  paymentFrequencyLabel: string;
  termLabel: string;
}
