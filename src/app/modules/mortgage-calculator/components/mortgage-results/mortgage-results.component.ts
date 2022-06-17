import { Component, Input, OnInit } from '@angular/core';
import { mortgageResultsInterface } from '../../models/mortgage.interface';

@Component({
  selector: 'app-mortgage-results',
  templateUrl: './mortgage-results.component.html',
  styleUrls: ['./mortgage-results.component.scss']
})
export class MortgageResultsComponent implements OnInit {

  constructor() { }

  @Input() public mortgageResults: mortgageResultsInterface;
  
  ngOnInit(): void {
  }

}
