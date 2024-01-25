import { Component } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ ReactiveFormsModule,],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  profileForm = new FormGroup({
    name :new FormControl('', Validators.required),
    email : new FormControl('',Validators.required)
  });

  handleSubmit(){
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
  
}
