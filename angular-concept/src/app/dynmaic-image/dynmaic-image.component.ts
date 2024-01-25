import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-dynmaic-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './dynmaic-image.component.html',
  styleUrl: './dynmaic-image.component.scss'
})
export class DynmaicImageComponent {
  logoUrl = './../../assets/logo1.gif';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
