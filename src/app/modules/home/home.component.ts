import {Component, ViewEncapsulation} from '@angular/core';
import {CardModule} from 'primeng/card';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent {
  recetas = [
    { nombre: 'Postres Peruanos', imagen: 'assets/postres.jpg' },
    { nombre: 'Causa Rellena', imagen: 'assets/causa.jpg' },
    { nombre: 'Ají de Gallina', imagen: 'assets/aji.jpg' },
    { nombre: 'Pisco Sour', imagen: 'assets/pisco.jpg' },
    { nombre: 'Ceviche', imagen: 'assets/ceviche.jpg' }
  ];

}
