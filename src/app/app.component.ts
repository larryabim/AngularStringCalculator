import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'string-calculator';
  testInput: string;
  calculator: number;
  regex = /-?[0-9]+/g;

  constructor() {

  }

  numDigits(x: number): number {
    return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
  }

  checkDigits(array: any ): any {
    for (let i = 0; i < array.length; i++) {
      if (this.numDigits(Number(array[i])) > 3 ) {
        array[i] = 0;
      }
    }
    return array;
  }

  stringCalculator(input: any): void {
    if (!input) {
      this.calculator = 0;
      return;
    }
    const text = input.toString();
    const stringArray =  this.checkDigits(text.match(this.regex));
    this.calculator = stringArray.reduce((t, s) => {
      return Number(t) + Number(s);
    });
  }

}

