import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcCompComponent } from './bc-comp.component';

describe('BcCompComponent', () => {
  let component: BcCompComponent;
  let fixture: ComponentFixture<BcCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
