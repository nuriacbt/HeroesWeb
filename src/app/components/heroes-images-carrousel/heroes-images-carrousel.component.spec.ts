import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesImagesCarrouselComponent } from './heroes-images-carrousel.component';

describe('HeroesImagesCarrouselComponent', () => {
  let component: HeroesImagesCarrouselComponent;
  let fixture: ComponentFixture<HeroesImagesCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesImagesCarrouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroesImagesCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
