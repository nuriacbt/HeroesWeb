import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Heroe } from '../../models/heroe.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-heroes-detail',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule ],
  templateUrl: './heroes-detail.component.html',
  styleUrl: './heroes-detail.component.scss'
})
export class HeroesDetailComponent {
    @Input() heroe: Heroe = {
      id: '0',
      name: '',
      imageUrl: '',
      intelligence: 0,
      speed: 0,
      combat: 0
    };

    constructor(
      private sanitizer: DomSanitizer
    ) {}

    getSafeUrl(imageUrl: string) {
      return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }

}
