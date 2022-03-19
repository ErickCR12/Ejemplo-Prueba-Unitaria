import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multdiv',
  templateUrl: './multdiv.component.html',
  styleUrls: ['./multdiv.component.css']
})
export class MultdivComponent implements OnInit {
  @ViewChild('result') result: any;
  constructor() { }

  ngOnInit(): void {
  }
  public multiplicacion(num1: number, num2: number): number{
    return Number(num1) * Number(num2);
  }

  public printMultiplicacion(num1: number, num2: number): any{
    this.result.nativeElement.value = this.multiplicacion(num1, num2);
  }
  public division(num1: number, num2: number): number{
    return Number(num1) / Number(num2);
  }

  public printDivision(num1: number, num2: number): any{
    this.result.nativeElement.value = this.division(num1, num2);
  }

}
