import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTwowayComponent } from './demo-twoway.component';

describe('DemoTwowayComponent', () => {
  let component: DemoTwowayComponent;
  let fixture: ComponentFixture<DemoTwowayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTwowayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
