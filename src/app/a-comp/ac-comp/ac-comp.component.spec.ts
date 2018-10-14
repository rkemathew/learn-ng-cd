import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcCompComponent } from './ac-comp.component';

describe('AcCompComponent', () => {
  let component: AcCompComponent;
  let fixture: ComponentFixture<AcCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
