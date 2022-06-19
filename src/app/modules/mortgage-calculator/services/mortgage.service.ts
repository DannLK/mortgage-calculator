import { Injectable } from '@angular/core';
import {
  mortgageFormInputInterface,
  mortgageResultsInterface,
} from '../models/mortgage.interface';
import { configService } from './config.service';

@Injectable()
export class mortgageService {
  mortgageFormInputs: mortgageFormInputInterface[];
  constructor(private ConfigSevice: configService) {
    this.mortgageFormInputs = ConfigSevice.getConfig();
  }

  /**
   *
   * @param form - A form that contains the following values:
   *
   * mortgageAmount - The amount the user expects to borrow from his/her financial institution. (In dollars)
   * interestRate - Annual interest rate for the mortgage (In percent)
   * amortizationPeriod - The number of years over which the user will repay this loan (In years)
   * paymentFrequency - The amount of payments that the user will in a year.
   * term - The duration of the loan agreement the user signed with his/her financial institution. (In years)
   *
   * @returns an object that contains the following values:
   *
   * numPayments - The number of payments that the user has to pay over the amortization period.
   * paymentFrequency - How many payments the user has to pay over the amortization period.
   * paymentAmount - The amount of money payed per payment cycle. (In dollars)
   * principlePayment - The amount payed in principle. (In dollars)
   * interestPayment - The amount of money payed in interest (In dollars)
   * totalPayment - The amount money payed in total. (principle + interest)
   * term - The term length (In years)
   * numTermPayments - Number of payments over the term period.
   * termPayment - The amount of money payed per payment cycle. (Same as paymentAmount)
   * principleTermPayment - The amount payed in principle over the term period.
   * interestTermPayment - The amount payed in interest over the term period
   * totalTermPayment - The amount of money payed in total over the term period. (principleTermPayment + interestTermPayment)
   * termEndBalance - Balance at the end of the term period (In dollars)
   */

  public calculateMortgage(form: any) {
    const mortgageAmount: number = form.mortgageAmount;
    const interestRate: number = form.interestRate;
    const amortizationPeriod: number = form.amortizationPeriod;
    const paymentFrequency: number = form.paymentFrequency;
    const term: number = form.term;

    const monthlyInterestRate = interestRate / 100 / 12;
    const numMonthsToPayLoan = amortizationPeriod * 12;
    const interestRateExponent = Math.pow(
      monthlyInterestRate + 1,
      numMonthsToPayLoan
    );

    const numerator =
      mortgageAmount * monthlyInterestRate * interestRateExponent;
    const denominator = interestRateExponent - 1;

    const paymentMonthly = numerator / denominator;
    const paymentYearly = paymentMonthly * 12;

    // Final values saved below
    const numPayments = amortizationPeriod * paymentFrequency;
    const paymentAmount = paymentYearly / paymentFrequency;
    const principlePayment = mortgageAmount;
    const totalPayment = paymentAmount * numPayments;
    const interestPayment = totalPayment - mortgageAmount;
    const numTermPayments = term * paymentFrequency;
    const termPayment = paymentAmount;
    const totalTermPayment = termPayment * numTermPayments;
    const interestTermPayment = (interestPayment / amortizationPeriod) * term; //
    const principleTermPayment = totalTermPayment - interestTermPayment;
    const termEndBalance = mortgageAmount - principleTermPayment;

    const amortizationPeriodLabel = this.mortgageFormInputs
      .find((input) => input.name === 'amortizationPeriod')
      ?.dropdownOptions?.find(
        (dropdownVal) => dropdownVal.value === amortizationPeriod
      )?.label;
    const paymentFrequencyLabel = this.mortgageFormInputs
      .find((input) => input.name === 'paymentFrequency')
      ?.dropdownOptions?.find(
        (dropdownVal) => dropdownVal.value === paymentFrequency
      )?.label;
    const termLabel = this.mortgageFormInputs
      .find((input) => input.name === 'term')
      ?.dropdownOptions?.find(
        (dropdownVal) => dropdownVal.value === term
      )?.label;

    const mortgageDetails: mortgageResultsInterface = {
      numPayments: numPayments,
      paymentFrequency: paymentFrequency,
      paymentAmount: paymentAmount,
      principlePayment: principlePayment,
      interestPayment: interestPayment,
      totalPayment: totalPayment,
      term: term,
      numTermPayments: numTermPayments,
      termPayment: termPayment,
      principleTermPayment: principleTermPayment,
      interestTermPayment: interestTermPayment,
      totalTermPayment: totalTermPayment,
      termEndBalance: termEndBalance,
      amortizationPeriodLabel: amortizationPeriodLabel!,
      paymentFrequencyLabel: paymentFrequencyLabel!,
      termLabel: termLabel!,
    };

    return mortgageDetails;
  }
}
