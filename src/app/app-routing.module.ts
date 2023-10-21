import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'about'},
  {path: 'about', component: AboutComponent, data: {state: 'about'}},
  {path: 'projects', component: ProjectsComponent, data: {state: 'projects'}},
  {path:'**', redirectTo: 'about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
