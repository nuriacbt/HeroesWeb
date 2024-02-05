import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogErrorOperationComponent } from './dialog-error-operation.component';

describe('DialogErrorOperationComponent', () => {
  let component: DialogErrorOperationComponent;
  let fixture: ComponentFixture<DialogErrorOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogErrorOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogErrorOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
