import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework(){
    alert(this.favoriteFramework);
  }
}
