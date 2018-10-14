import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbCompComponent } from './bb-comp.component';

describe('BbCompComponent', () => {
  let component: BbCompComponent;
  let fixture: ComponentFixture<BbCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
