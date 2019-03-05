import { Component } from '@angular/core';
import { CalculatorService } from './client/api/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arg1: number;
  arg2: number;
  result: number;

  constructor(private  calculatorService: CalculatorService) {
  }

  add() {
    if (this.arg1 || this.arg2) {
      this.calculatorService
        .add({arg1: this.arg1, arg2: this.arg2})
        .subscribe(data => this.result = data.result);
    }
  }
}
