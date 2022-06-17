import { mortgageFormInputInterface, mortgageFormInputType } from "../models/mortgage.interface"

export const mortgageFormConfig: mortgageFormInputInterface[]  = [
    {
      name: 'mortgageAmount',
      label: 'Mortgage Amount:',
      type: mortgageFormInputType.input,
      initialValue: 100000,
      validationError: 'Please enter a valid mortgage amount.',
      maxLength: 15,
      postfix: '$'
    },
    {
      name: 'interestRate',
      label: 'Interest Rate:',
      type: mortgageFormInputType.input,
      initialValue: 5,
      validationError: 'Please enter a valid interest rate.',
      maxLength: 5,
      postfix: '%'
    },
    {
      name: 'amortizationPeriod',
      label: 'Amortization Period:',
      type: mortgageFormInputType.dropdown,
      dropdownOptions: [
        {label: '1 year', value: 1},
        {label: '2 years', value: 2},
        {label: '3 years', value: 3},
        {label: '4 years', value: 4},
        {label: '5 years', value: 5},
        {label: '6 years', value: 6},
        {label: '7 years', value: 7},
        {label: '8 years', value: 8},
        {label: '9 years', value: 9},
        {label: '10 years', value: 10},
        {label: '11 years', value: 11},
        {label: '12 years', value: 12},
        {label: '13 years', value: 13},
        {label: '14 years', value: 14},
        {label: '15 years', value: 15},
        {label: '16 years', value: 16},
        {label: '17 years', value: 17},
        {label: '18 years', value: 18},
        {label: '19 years', value: 19},
        {label: '20 years', value: 20},
        {label: '21 years', value: 21},
        {label: '22 years', value: 22},
        {label: '23 years', value: 23},
        {label: '24 years', value: 24},
        {label: '25 years', value: 25},
        {label: '26 years', value: 26},
        {label: '27 years', value: 27},
        {label: '28 years', value: 28},
        {label: '29 years', value: 29},
        {label: '30 years', value: 30}
      ],
      initialValue: 25,
    },
    {
      name: 'paymentFrequency',
      label: 'Payment Frequency:',
      type: mortgageFormInputType.dropdown,
      dropdownOptions: [
        {label: 'Weekly', value: 52},
        {label: 'Bi-Weekly', value: 26},
        {label: 'Semi-Monthly', value: 24},
        {label: 'Monthly (12x per year)', value: 12}
      ],
      initialValue: 12
    },
    {
      name: 'term',
      label: 'Term:',
      type: mortgageFormInputType.dropdown,
      dropdownOptions: [
        {label: '1 year', value: 1},
        {label: '2 years', value: 2},
        {label: '3 years', value: 3},
        {label: '4 years', value: 4},
        {label: '5 years', value: 5},
        {label: '6 years', value: 6},
        {label: '7 years', value: 7},
        {label: '8 years', value: 8},
        {label: '9 years', value: 9},
        {label: '10 years', value: 10}
      ],
      initialValue: 5
    }
]