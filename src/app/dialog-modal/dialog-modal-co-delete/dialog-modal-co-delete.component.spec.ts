import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModalCoDeleteComponent } from './dialog-modal-co-delete.component';

describe('DialogModalComponent', () => {
  let component: DialogModalCoDeleteComponent;
  let fixture: ComponentFixture<DialogModalCoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogModalCoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModalCoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
