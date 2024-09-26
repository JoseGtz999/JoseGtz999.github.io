import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  languages = [
    { name: 'Español', level: 'Nativo' },
    { name: 'Ingles', level: 'Básico' }
  ];
}
