import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideLeft } from './route.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideLeft
  ]
  
})
export class AppComponent {
  title = 'portfolio-webpage';

  changeRoute(outlet: RouterOutlet)
  {
    console.log(outlet.activatedRouteData)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
