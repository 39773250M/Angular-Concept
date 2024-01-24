import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConceptComponentComponent } from './concept-component/concept-component.component';
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { DeferComponent } from "./defer/defer.component";
import { DynmaicImageComponent } from "./dynmaic-image/dynmaic-image.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ConceptComponentComponent, ParentComponent, ChildComponent, DeferComponent, DynmaicImageComponent]
})
export class AppComponent {
  title = 'angular-concept';
}
