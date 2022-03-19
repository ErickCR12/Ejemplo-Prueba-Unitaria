import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SumarestaComponent } from './sumaresta.component';

describe('SumarestaComponent', () => {
  let component: SumarestaComponent;
  let fixture: ComponentFixture<SumarestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumarestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumarestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let app: SumarestaComponent;
  
  beforeEach(async(() => {
    app = new SumarestaComponent();
  }));

  afterEach(async(() => {
    (<HTMLInputElement>document.getElementById('num1')).value = '0';
    (<HTMLInputElement>document.getElementById('num2')).value = '0';
    document.getElementById('buttonr').click();
  }));

  it('probar suma: la suma debe dar 12', async(() => {
    expect(app.suma(5 , 7)).toEqual(12);
  }));

  it('la diferencia debe dar -9', async(() => {
    (<HTMLInputElement>document.getElementById('num1')).value = '4';
    (<HTMLInputElement>document.getElementById('num2')).value = '2';
    document.getElementById('buttonr').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('2');
  }));
});
