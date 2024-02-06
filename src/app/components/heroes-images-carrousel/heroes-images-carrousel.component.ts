import { Component, Input,  } from '@angular/core';
import { IgxCarouselModule, IgxSliderModule } from 'igniteui-angular';
import { Heroe } from '../../models/heroe.model';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-heroes-images-carrousel',
  standalone: true,
  imports: [ 
    CommonModule,
    IgxCarouselModule, 
    IgxSliderModule
  ],
  templateUrl: './heroes-images-carrousel.component.html',
  styleUrl: './heroes-images-carrousel.component.scss'
})
export class HeroesImagesCarrouselComponent {

  @Input() heroesList: Heroe[] = [];

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  getSafeUrl(imageUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

}
