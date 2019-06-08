import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdelComponent } from './adel.component';

describe('AdelComponent', () => {
  let component: AdelComponent;
  let fixture: ComponentFixture<AdelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
