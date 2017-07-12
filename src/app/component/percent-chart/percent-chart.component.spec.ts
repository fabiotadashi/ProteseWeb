import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentChartComponent } from './percent-chart.component';

describe('PercentChartComponent', () => {
  let component: PercentChartComponent;
  let fixture: ComponentFixture<PercentChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
