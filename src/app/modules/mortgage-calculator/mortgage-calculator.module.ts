import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { MortgageFormComponent } from './components/mortgage-form/mortgage-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { configService } from './services/config.service';
import { MortgageResultsComponent } from './components/mortgage-results/mortgage-results.component';
import { mortgageService } from './services/mortgage.service';


@NgModule({
  declarations: [
    MortgageCalculatorComponent,
    MortgageFormComponent,
    MortgageResultsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MortgageCalculatorComponent,
    MortgageFormComponent,
    MortgageResultsComponent
  ],
  providers: [
    configService,
    mortgageService
  ]
})
export class MortgageCalculatorModule { }
