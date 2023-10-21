import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/'},
  {path: '', component: AboutComponent, data: {animation: '*'}},
  {path: 'projects', component: ProjectsComponent},
  {path:'**', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
