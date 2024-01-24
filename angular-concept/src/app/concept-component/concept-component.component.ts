import { Component } from '@angular/core';

@Component({
  selector: 'app-concept-component',
  standalone: true,
  imports: [],
  templateUrl: './concept-component.component.html',
  styleUrl: './concept-component.component.scss'
})
export class ConceptComponentComponent {
  username = 'Murugan Perumal';

  isServerRunning = false;

  isEditable: boolean = true;
  
 
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
    {id: 5, name: 'Sarah'},
    {id: 6, name: 'Amy'},
    {id: 7, name: 'Rachel'},
    {id: 8, name: 'Jessica'},
    {id: 9, name: 'Poornima'},
  ];


  message: string= "";

  onMouseOver() {
    this.message = 'Way to go 🚀 this is a mouese over';
  }

}
