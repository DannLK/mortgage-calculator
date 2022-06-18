import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { MortgageCalculatorModule } from './mortgage-calculator.module';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;
  let expectedTitle = 'Mortgage Calculator'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageCalculatorComponent ],
      imports: [MortgageCalculatorModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Title of form should be Mortgage Calculator ', () => {
    expect(component.mortgageCalculatorTitle).toEqual(expectedTitle);
  });

});
