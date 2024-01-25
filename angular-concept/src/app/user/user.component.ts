import { Component } from '@angular/core';
import { ReversePipe } from '../Pipes/reverse.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReversePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  userName = "my name is murugan"
}
