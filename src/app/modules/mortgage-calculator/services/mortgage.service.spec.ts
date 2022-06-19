import { mortgageFormConfig } from "../configs/mortgage-form.config";
import { mortgageResultsInterface } from "../models/mortgage.interface";
import { mortgageService } from "./mortgage.service";

const mockFormData = {mortgageAmount: 100000, interestRate: 5, amortizationPeriod: 25, paymentFrequency: 12, term: 5}
const mockMortgageReturn: mortgageResultsInterface = {
  numPayments: 300,
  paymentFrequency: 12,
  paymentAmount: 584.5900415079801,
  principlePayment: 100000,
  interestPayment: 75377.01245239403,
  totalPayment: 175377.01245239403,
  term: 5,
  numTermPayments: 60,
  termPayment: 584.5900415079801,
  principleTermPayment: 20000,
  interestTermPayment: 15075.402490478808,
  totalTermPayment: 35075.40249047881,
  termEndBalance: 80000,
  amortizationPeriodLabel: "25 years",
  paymentFrequencyLabel: "Monthly (12x per year)",
  termLabel: "5 years"
}

describe('mortgageService tests', () => {
  let service: mortgageService
  let mortgageDetails: mortgageResultsInterface
  let fakeConfigService = jasmine.createSpyObj('configService', ["getConfig"])
  fakeConfigService.getConfig = jasmine.createSpy().and.returnValue(mortgageFormConfig);
  beforeEach(() => { 
    service = new mortgageService(fakeConfigService); 
  });

  it('mortgage form intial values return check', () => {
    mortgageDetails = service.calculateMortgage(mockFormData);

    // The values below do not have decimal places, therefore we can check for equality.
    expect(mortgageDetails.numPayments).toEqual(mockMortgageReturn.numPayments)
    expect(mortgageDetails.paymentFrequency).toEqual(mockMortgageReturn.paymentFrequency)
    expect(mortgageDetails.principlePayment).toEqual(mockMortgageReturn.principlePayment)
    expect(mortgageDetails.term).toEqual(mockMortgageReturn.term)
    expect(mortgageDetails.numTermPayments).toEqual(mockMortgageReturn.numTermPayments)
    expect(mortgageDetails.amortizationPeriodLabel).toEqual(mockMortgageReturn.amortizationPeriodLabel)
    expect(mortgageDetails.paymentFrequencyLabel).toEqual(mockMortgageReturn.paymentFrequencyLabel)
    expect(mortgageDetails.termLabel).toEqual(mockMortgageReturn.termLabel)

    // The values below can have decimal places, therefore we are checking to the nearest whole number in case of rounding errors.
    expect(mortgageDetails.paymentAmount).toBeCloseTo(mockMortgageReturn.paymentAmount, 1)
    expect(mortgageDetails.interestPayment).toBeCloseTo(mockMortgageReturn.interestPayment, 1)
    expect(mortgageDetails.totalPayment).toBeCloseTo(mockMortgageReturn.totalPayment, 1)
    expect(mortgageDetails.termPayment).toBeCloseTo(mockMortgageReturn.termPayment, 1)
    expect(mortgageDetails.principleTermPayment).toBeCloseTo(mockMortgageReturn.principleTermPayment, 1)
    expect(mortgageDetails.interestTermPayment).toBeCloseTo(mockMortgageReturn.interestTermPayment, 1)
    expect(mortgageDetails.totalTermPayment).toBeCloseTo(mockMortgageReturn.totalTermPayment, 1)
    expect(mortgageDetails.termEndBalance).toBeCloseTo(mockMortgageReturn.termEndBalance, 1)
  });


});