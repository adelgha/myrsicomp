import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModalCoComponent } from './dialog-modal-co.component';

describe('DialogModalComponent', () => {
  let component: DialogModalCoComponent;
  let fixture: ComponentFixture<DialogModalCoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogModalCoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModalCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
