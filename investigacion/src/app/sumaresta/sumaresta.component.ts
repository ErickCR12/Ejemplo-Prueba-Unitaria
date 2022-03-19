import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sumaresta',
  templateUrl: './sumaresta.component.html',
  styleUrls: ['./sumaresta.component.css']
})
export class SumarestaComponent implements OnInit {
  @ViewChild('result') result: any;
  constructor() { }

  ngOnInit(): void {
  }
  public suma(num1: number, num2: number): number{
    return Number(num1) + Number(num2);
  }

  public printSuma(num1: number, num2: number): any{
    this.result.nativeElement.value = this.suma(num1, num2);
  }

  public resta(num1: number, num2: number): number{
    return Number(num1) - Number(num2);
  }

  public printResta(numa: number, numb: number): any{
    this.result.nativeElement.value = this.resta(numa, numb);
  }
}
