import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaCompComponent } from './aa-comp.component';

describe('AaCompComponent', () => {
  let component: AaCompComponent;
  let fixture: ComponentFixture<AaCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
