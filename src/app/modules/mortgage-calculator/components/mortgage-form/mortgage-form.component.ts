import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  mortgageFormInputType,
  mortgageFormInputInterface,
} from '../../models/mortgage.interface';
import { configService } from '../../services/config.service';
import { mortgageService } from '../../services/mortgage.service';
import { mortgageResultsInterface } from '../../models/mortgage.interface';

@Component({
  selector: 'app-mortgage-form',
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['./mortgage-form.component.scss'],
})
export class MortgageFormComponent implements OnInit {
  mortgageForm: FormGroup;
  mortgageFormInputs: mortgageFormInputInterface[];
  mortgageResults: mortgageResultsInterface;

  constructor(
    private formBuilder: FormBuilder,
    private configService: configService,
    private mortgageService: mortgageService
  ) {
    this.mortgageFormInputs = configService.getConfig();
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    let formGroup: { [key: string]: any } = {};

    this.mortgageFormInputs.map((input) => {
      switch (input.type) {
        case mortgageFormInputType.input:
          formGroup[input.name] =
            input.name === 'interestRate'
              ? new FormControl(input.initialValue, [
                  Validators.pattern(
                    '^(0*[1-9][0-9]*(.[0-9]+)?|0+.[0-9]*[1-9][0-9]*)$'
                  ),
                  Validators.maxLength(input.maxLength!),
                  Validators.required,
                  Validators.max(input.maxValue!),
                ])
              : new FormControl(input.initialValue, [
                  Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
                  Validators.maxLength(input.maxLength!),
                  Validators.required,
                ]);

          break;
        case mortgageFormInputType.dropdown:
          formGroup[input.name] = new FormControl(
            input.dropdownOptions?.find(
              (dropdownInput) => dropdownInput.value === input.initialValue
            )?.value,
            [Validators.required]
          );
          break;
        default:
          formGroup[input.name] = new FormControl(input.initialValue, [
            Validators.required,
          ]);
          break;
      }
    });
    this.mortgageForm = this.formBuilder.group(formGroup);
    // console.log('formBuilder: ', this.mortgageForm.value);
  }

  public onSubmit(): void {
    // console.log('submit form:' , this.mortgageForm);
    if (this.mortgageForm.valid) {
      console.log('valid: ', this.mortgageForm.value);
      this.mortgageResults = this.mortgageService.calculateMortgage(
        this.mortgageForm.value
      );
    } else {
      console.log('not valid');
    }
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.mortgageForm.controls[controlName].hasError(errorName);
  };
}
