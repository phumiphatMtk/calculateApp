import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentNumber: any;
  firstOperand: any;
  operator: any;
  waitForSecondNumber: boolean;

  constructor() {
    this.waitForSecondNumber = false;
  }

  ngOnInit() {
    const localNum = localStorage.getItem('currentNum');
    if (localNum) {
      this.currentNumber = localStorage.getItem('currentNum');
      this.firstOperand = localStorage.getItem('firstOperand');
      this.operator = localStorage.getItem('operator');
      this.waitForSecondNumber = true;
    } else {
      this.currentNumber = '0';
      this.firstOperand = null;
      this.operator = null;
      this.waitForSecondNumber = false;
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  public getNumber(v: string) {
    console.log(v);
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0'
        ? (this.currentNumber = v)
        : (this.currentNumber += v);
    }
  }

  doCalculation(op: any, secondOp: any) {
    switch (op) {
      case '+':
        return (this.firstOperand += secondOp);
      case '-':
        return (this.firstOperand -= secondOp);
      case '*':
        return (this.firstOperand *= secondOp);
      case '/':
        return (this.firstOperand /= secondOp);
      case '%':
        return (this.firstOperand %= secondOp);
      case '=':
        return secondOp;
    }
  }

  getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(
        this.operator,
        Number(this.currentNumber)
      );
      this.currentNumber = String(result);
      localStorage.setItem('currentNum', this.currentNumber);
      this.firstOperand = result;
      localStorage.setItem('firstOperand', result);
    }
    this.operator = op;
    localStorage.setItem('op', op);
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

  clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
