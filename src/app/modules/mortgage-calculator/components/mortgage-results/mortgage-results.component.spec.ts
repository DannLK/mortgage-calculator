import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MortgageCalculatorModule } from '../../mortgage-calculator.module';
import { MortgageResultsComponent } from './mortgage-results.component';

describe('MortgageResultsComponent', () => {
  let component: MortgageResultsComponent;
  let fixture: ComponentFixture<MortgageResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageResultsComponent ],
      imports: [MortgageCalculatorModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
