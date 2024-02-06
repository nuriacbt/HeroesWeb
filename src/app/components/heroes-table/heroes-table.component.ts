import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroe } from '../../models/heroe.model';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-heroes-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './heroes-table.component.html',
  styleUrl: './heroes-table.component.scss'
})
export class HeroesTableComponent {

  @Input() heroesList: Heroe[] = [];

  @Output() handleEditHeroe = new EventEmitter<Heroe>();
  @Output() handleDeleteHeroe = new EventEmitter<Heroe>();
  @Output() handleDetailHeroe = new EventEmitter<Heroe>();
  

  public displayedColumns: string[] = ['id', 'name', 'actions'];

  onEditHeroe(row: Heroe) {
    this.handleEditHeroe.emit(row);
  }

  onDeleteHeroe(row: Heroe) {
    this.handleDeleteHeroe.emit(row);
  }

  onDetailHeroe(row: Heroe) {
    this.handleDetailHeroe.emit(row);
  }

}
