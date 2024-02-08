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


  isServerRunning = true;

  isEditable: boolean = false;
  
 
  users = [
    {id: 0, name: 'Sarah', degree:'BE', complemeted:true},
    {id: 1, name: 'Sarah'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
    {id: 5, name: 'Sarah'},
    {id: 6, name: 'Amy'},
    {id: 7, name: 'Rachel'},
    {id: 8, name: 'Jessica'},
    {id: 9, name: 'Poornima'},
    {id: 5, name: 'Sarah'},
    {id: 6, name: 'Amy'},
    {id: 7, name: 'Rachel'},
    {id: 8, name: 'Jessica'},
    {id: 9, name: 'Poornima'},
  ];

  operatingSystems = [
    {id: 'win', name: 'Windows'}, 
    {id: 'osx', name: 'MacOS'},
     {id: 'linux', name: 'Linux'}
    ]


  message: string= "wedwe";
  xyz:string="";

  greet1:string="";

  onMouseOver() {
    this.message = 'Way to go 🚀 this is a mouese over';
    console.log('Mouse over 👋', this.message);
  }
  checkvalue(){
    this.xyz = "you have clicked on this button"
  }


  greet(){
    this.greet1 = "you have clicked greet button"
    console.log('Hello, there 👋', this.greet1);
    console.log('operatingSystems 👋', this.operatingSystems);
    
  }
}
