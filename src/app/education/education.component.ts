import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Array<any> = [];

  ngOnInit(): void {
    let school1 = {
      fecha: "2019-2022",
      nombre: "Adolfo Lopez Mateos",
      titulo: "Certificado preparatoria",
    };
    let school2 = {
      fecha: "2020-2021",
      nombre: "Adolfo Lopez Mateos",
      titulo: "Certificado Operador de Microcomputadoras",
    };

    this.education.push(school1);
    this.education.push(school2);
  }

}
