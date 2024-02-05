import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Heroe } from '../../models/heroe.model';
import { MatButtonModule } from '@angular/material/button';
import { createUrlValidator } from '../../custom/custom-url-validator';
import { UpperTextDirective } from '../../custom/upper-text.directive';

@Component({
  selector: 'app-heroes-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    UpperTextDirective
  ],
  templateUrl: './heroes-form.component.html',
  styleUrl: './heroes-form.component.scss'
})
export class HeroesFormComponent implements OnInit, OnChanges {

  @Input() heroe: Heroe = {
    id: '0',
    name: '',
    imageUrl: '',
    intelligence: 0,
    speed: 0,
    combat: 0
  };

  @Output() handleSave = new EventEmitter<Heroe>();

  MIN_HABILITY_VALUE = 30;
  MAX_HABILITY_VALUE = 100;

  heroeForm = new FormGroup({
    idCnt: new FormControl(0),
    nameCnt: new FormControl('', [ Validators.required, Validators.minLength(4)]),
    imageUrlCnt: new FormControl('', [ createUrlValidator() ]),
    intelligenceCnt: new FormControl(this.MIN_HABILITY_VALUE, [ Validators.min(this.MIN_HABILITY_VALUE) , Validators.max(this.MAX_HABILITY_VALUE)]),
    speedCnt: new FormControl(this.MIN_HABILITY_VALUE, [ Validators.min(this.MIN_HABILITY_VALUE) , Validators.max(this.MAX_HABILITY_VALUE)]),
    combatCnt: new FormControl(this.MIN_HABILITY_VALUE, [ Validators.min(this.MIN_HABILITY_VALUE) , Validators.max(this.MAX_HABILITY_VALUE)])
  });

  ngOnInit(): void {


    if (this.heroe) {
      this.heroeForm.patchValue({
        idCnt: Number(this.heroe.id),
        nameCnt: this.heroe.name,
        imageUrlCnt: this.heroe.imageUrl,
        intelligenceCnt: this.heroe.intelligence == 0 ? this.MIN_HABILITY_VALUE : this.heroe.intelligence,
        speedCnt: this.heroe.speed == 0 ? this.MIN_HABILITY_VALUE : this.heroe.speed,
        combatCnt: this.heroe.combat == 0 ? this.MIN_HABILITY_VALUE : this.heroe.combat
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    let newHeroe = changes['heroe'].currentValue;
    if (newHeroe) {
      this.heroeForm.patchValue({
        idCnt: Number(newHeroe.id),
        nameCnt: newHeroe.name,
        imageUrlCnt: newHeroe.imageUrl,
        intelligenceCnt: newHeroe.intelligence == 0 ? this.MIN_HABILITY_VALUE : newHeroe.intelligence,
        speedCnt: newHeroe.speed == 0 ? this.MIN_HABILITY_VALUE : newHeroe.speed,
        combatCnt: newHeroe.combat == 0 ? this.MIN_HABILITY_VALUE : newHeroe.combat
      });
    }
  }

  onSubmit() {

    if (this.heroeForm.valid) {
      let heroeSave = {
        id: this.heroeForm.get('idCnt')?.value?.toString() || this.heroe.id,
        name: this.heroeForm.get('nameCnt')?.value || this.heroe.name,
        imageUrl: this.heroeForm.get('imageUrlCnt')?.value || this.heroe.imageUrl,
        intelligence: this.heroeForm.get('intelligenceCnt')?.value || this.heroe.intelligence,
        speed: this.heroeForm.get('speedCnt')?.value || this.heroe.speed,
        combat: this.heroeForm.get('combatCnt')?.value || this.heroe.combat
      }
      this.handleSave.emit(heroeSave);

    }

  }

  onResetForm() {
    this.heroeForm.patchValue({
      nameCnt: this.heroe?.name,
      imageUrlCnt: this.heroe?.imageUrl,
      intelligenceCnt: this.heroe?.intelligence,
      speedCnt: this.heroe?.speed,
      combatCnt: this.heroe?.combat
    });
  }

}
