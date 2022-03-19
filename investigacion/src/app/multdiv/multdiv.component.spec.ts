import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MultdivComponent } from './multdiv.component';

describe('MultdivComponent', () => {
  let component: MultdivComponent;
  let fixture: ComponentFixture<MultdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultdivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let app: MultdivComponent;
  
  beforeEach(async(() => {
    app = new MultdivComponent();
  }));
 
  it('probar multiplicacion: la multiplicación debe dar 25', async(() => {
    expect(app.multiplicacion(5 , 5)).toEqual(25);
  }));

  it('división debe dar 4', async(() => {
    (<HTMLInputElement>document.getElementById('num1')).value = '16';
    (<HTMLInputElement>document.getElementById('num2')).value = '4';
    document.getElementById('buttond').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('4');
  }));
});
