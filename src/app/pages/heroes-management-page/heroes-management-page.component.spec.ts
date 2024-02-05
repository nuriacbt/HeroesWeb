import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesManagementPageComponent } from './heroes-management-page.component';

describe('HeroesManagementPageComponent', () => {
  let component: HeroesManagementPageComponent;
  let fixture: ComponentFixture<HeroesManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesManagementPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroesManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
