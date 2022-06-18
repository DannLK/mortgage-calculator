import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configService } from '../../services/config.service';
import { mortgageService } from '../../services/mortgage.service';
import { MortgageFormComponent } from './mortgage-form.component';
import {mortgageFormConfig} from '../../configs/mortgage-form.config'
import { MortgageCalculatorModule } from '../../mortgage-calculator.module';

describe('MortgageFormComponent', () => {
  let component: MortgageFormComponent;
  let fixture: ComponentFixture<MortgageFormComponent>;

  let fakeConfigService = jasmine.createSpyObj('configService', ["getConfig"])
  let fakeMortgageService = jasmine.createSpyObj('mortgageService', ["calculateMortgage"])
  fakeConfigService.getConfig = jasmine.createSpy().and.returnValue(mortgageFormConfig);
 
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ MortgageFormComponent ],
      imports: [MortgageCalculatorModule],
      providers: [{provide: configService, useValue: fakeConfigService}, {provide: mortgageService, useValue: fakeMortgageService}]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(MortgageFormComponent);
      component = fixture.componentInstance;
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageFormComponent);
    component = fixture.componentInstance;
    fakeMortgageService.calculateMortgage.calls.reset();
    fixture.detectChanges();
  });

  it('should create MortgageFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('initial values of form should be valid', () => {
    expect(component.mortgageForm.valid).toBeTruthy();
  })

  it('should call calculateMortgage method in mortgageService when valid form is submitted', () => {
    component.onSubmit();
    expect(fakeMortgageService.calculateMortgage).toHaveBeenCalled();
  })

  it('should NOT call calculateMortgage method in mortgageService when invalid form is submitted', () => {
    component.mortgageForm.patchValue({mortgageAmount: null });
    component.onSubmit();
    expect(fakeMortgageService.calculateMortgage).not.toHaveBeenCalled();
  })



});
