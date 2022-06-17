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
  postfix?: string;
}

export interface mortgageResultsInterface{
  numMonthlyPayments: number;
  paymentFrequency: number;
  monthlyPayment: number;
  principlePayment: number;
  interestPayment: number;
  totalPayment: number;
  term: number;
  numMonthlyTermPayments: number;
  monthlyTermPayment: number;
  principleTermPayment: number;
  interestTermPayment: number;
  totalTermPayment: number;
  termEndBalance: number;
}