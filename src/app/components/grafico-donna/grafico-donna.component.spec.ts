import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDonnaComponent } from './grafico-donna.component';

describe('GraficoDonnaComponent', () => {
  let component: GraficoDonnaComponent;
  let fixture: ComponentFixture<GraficoDonnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDonnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDonnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
