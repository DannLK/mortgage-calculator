import { Injectable } from "@angular/core";
import { mortgageResultsInterface } from "../models/mortgage.interface";
@Injectable()
export class mortgageService {
  
  constructor (){
  }

  public calculateMortgage(form: any){

    const mortgageAmount: number = form.mortgageAmount;
    const interestRate: number = form.interestRate;
    const amortizationPeriod: number = form.amortizationPeriod;
    const paymentFrequency: number = form.paymentFrequency;
    const term: number = form.term;

    const monthlyInterestRate =  (interestRate / 100) / 12;
    const numMonthsToPayLoan = amortizationPeriod * 12;
    const interestRateExponent = (Math.pow((monthlyInterestRate + 1), numMonthsToPayLoan));
    
    const numerator = mortgageAmount * monthlyInterestRate * interestRateExponent;
    const denominator = interestRateExponent - 1;
    
    const paymentMonthly = Number((numerator/denominator).toFixed(2));
    const paymentYearly = paymentMonthly * 12;
    
    // Final values saved below
    const numMonthlyPayments = amortizationPeriod * paymentFrequency;
    const monthlyPayment = paymentYearly/paymentFrequency;;
    const principlePayment = mortgageAmount;
    const totalPayment = monthlyPayment * numMonthlyPayments;
    const interestPayment = totalPayment - mortgageAmount;
    const numMonthlyTermPayments = term * paymentFrequency;
    const monthlyTermPayment = monthlyPayment;
    const totalTermPayment = monthlyTermPayment * numMonthlyTermPayments;
    const interestTermPayment = (interestPayment / amortizationPeriod) * term; // 
    const principleTermPayment = totalTermPayment - interestTermPayment;
    const termEndBalance = mortgageAmount - principleTermPayment;

    const returnObj: mortgageResultsInterface = {
      numMonthlyPayments: numMonthlyPayments,
      paymentFrequency: paymentFrequency,
      monthlyPayment: monthlyPayment,
      principlePayment: principlePayment,
      interestPayment: interestPayment,
      totalPayment: totalPayment,
      term: term,
      numMonthlyTermPayments: numMonthlyTermPayments,
      monthlyTermPayment: monthlyTermPayment,
      principleTermPayment: principleTermPayment,
      interestTermPayment: interestTermPayment,
      totalTermPayment: totalTermPayment,
      termEndBalance: termEndBalance,
    } 
    return returnObj;
  }

}