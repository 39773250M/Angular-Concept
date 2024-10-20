import { Component, inject } from '@angular/core';
import { ConceptServiceService } from '../Service/conceptService/concept-service.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

   ComponentProperty= inject(ConceptServiceService);
  display = '';
  dispaly2= "";
  display3:any;

  constructor( private conceptserviceService:ConceptServiceService){
    
      this.display = this.conceptserviceService.getCars().join(' ⭐️ ');
    this.dispaly2 = this.ComponentProperty.getCars().join(' ⭐️ ');
    this.display3 = this.ComponentProperty.getCars();
    

  }
  

}
