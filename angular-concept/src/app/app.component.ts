import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConceptComponentComponent } from './concept-component/concept-component.component';
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { DeferComponent } from "./defer/defer.component";
import { DynmaicImageComponent } from "./dynmaic-image/dynmaic-image.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home/home.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [MatSlideToggleModule,CommonModule, RouterOutlet,RouterLink, ConceptComponentComponent, ParentComponent, ChildComponent, DeferComponent, DynmaicImageComponent, NavigationComponent, UserComponent, HomeComponent]
})
export class AppComponent {
  title = 'angular-concept';
}
