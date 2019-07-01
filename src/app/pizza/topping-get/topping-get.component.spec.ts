import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingGetComponent } from './topping-get.component';

describe('ToppingGetComponent', () => {
  let component: ToppingGetComponent;
  let fixture: ComponentFixture<ToppingGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
