import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesPaginatorComponent } from './heroes-paginator.component';

describe('HeroesPaginatorComponent', () => {
  let component: HeroesPaginatorComponent;
  let fixture: ComponentFixture<HeroesPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesPaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroesPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
