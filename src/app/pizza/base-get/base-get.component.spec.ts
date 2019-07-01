import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGetComponent } from './base-get.component';

describe('BaseGetComponent', () => {
  let component: BaseGetComponent;
  let fixture: ComponentFixture<BaseGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
