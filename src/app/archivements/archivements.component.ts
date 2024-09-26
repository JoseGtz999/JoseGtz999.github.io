import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archivements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archivements.component.html',
  styleUrl: './archivements.component.css'
})
export class ArchivementsComponent {
  archivements : Array<any> = [];
  ngOnInit(): void {
    let logro1 = {
      fecha: 'Mayo 2023',
      titulo: 'Proyecto Open Source',
      descripcion: 'Contribui a un proyecto open source, ayudando a mejorar su perfomance en un 30%'
    };
    let logro2 = {
      fecha: 'Junio 2023',
      titulo: 'Certificacion Angular Avanzado',
      descripcion: 'Complete la certificacion angular avanzado con un puntaje del 95%'
    };
    let logro3 = {
      fecha: 'Octubre 2022',
      titulo: 'Hackathon Ganado',
      descripcion: 'Ganador del primer lugar en un hackathon con mas de 50 equipos'
    };
    this.archivements.push(logro1);
    this.archivements.push(logro2);
    this.archivements.push(logro3);
    console.log(this.archivements);
  }
}
