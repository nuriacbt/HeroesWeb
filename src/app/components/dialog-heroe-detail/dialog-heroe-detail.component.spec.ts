import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHeroeDetailComponent } from './dialog-heroe-detail.component';

describe('DialogHeroeDetailComponent', () => {
  let component: DialogHeroeDetailComponent;
  let fixture: ComponentFixture<DialogHeroeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogHeroeDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogHeroeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
