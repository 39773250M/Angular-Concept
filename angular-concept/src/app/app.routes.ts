import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DeferComponent } from './defer/defer.component';
import { ConceptComponentComponent } from './concept-component/concept-component.component';
import { DynmaicImageComponent } from './dynmaic-image/dynmaic-image.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipeconceptComponent } from './pipeconcept/pipeconcept.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     title: 'App Home Page',
    //     component: HomeComponent,
    //   },
      {
        path: 'user',
        title: 'App User Page',
        component: UserComponent,
      },
      {
        path: 'parent',
        title: 'App parent Page',
        component: ParentComponent,
      },
      {
        path: 'child',
        title: 'App child Page',
        component: ChildComponent,
      },
      {
        path: 'defer',
        title: 'Defer component concept',
        component: DeferComponent,
      },
      {
        path: 'concept-component',
        title: 'component concept',
        component: ConceptComponentComponent,
      },
      {
        path: 'dynamic-image',
        title: 'dynamic-image component concept',
        component: DynmaicImageComponent,
      },
      {
        path: 'forms',
        title: 'Froms related concept',
        component: FormsComponent,
      },
      {
        path: 'reactive-forms',
        title: 'Reactive Froms related concept',
        component: ReactiveFormsComponent,
      },
      {
        path: 'pipe',
        title: 'Pipe related concept',
        component: PipeconceptComponent,
      },
      {
        path: 'tasks-page',
        title: 'Angular task page',
        component: TaskListComponent,
      },

];
