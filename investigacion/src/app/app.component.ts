import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('result') result: any;
  
  title = 'investigacion';

  public ngOnInit(): void {

  }
  public add(num1: number, num2: number): number{
    return Number(num1) + Number(num2);
  }

  public printAdd(num1: number, num2: number): any{
    this.result.nativeElement.value = this.add(num1, num2);
  }

  public minus(num1: number, num2: number): number{
    return Number(num1) - Number(num2);
  }

  public printMinus(numa: number, numb: number): any{
    this.result.nativeElement.value = this.minus(numa, numb);
  }

  public multi(num1: number, num2: number): number{
    return Number(num1) * Number(num2);
  }

  public printMulti(num1: number, num2: number): any{
    this.result.nativeElement.value = this.multi(num1, num2);
  }
  public div(num1: number, num2: number): number{
    return Number(num1) / Number(num2);
  }

  public printDiv(num1: number, num2: number): any{
    this.result.nativeElement.value = this.div(num1, num2);
  }

}
