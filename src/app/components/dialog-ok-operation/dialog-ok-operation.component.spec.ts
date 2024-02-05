import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOkOperationComponent } from './dialog-ok-operation.component';

describe('DialogOkOperationComponent', () => {
  let component: DialogOkOperationComponent;
  let fixture: ComponentFixture<DialogOkOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOkOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogOkOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
