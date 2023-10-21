import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(){}

  technologies: {iconURL: string, caption: string}[] = [
    {
      iconURL: '/assets/images/tech-icons/AngularJS.svg',
      caption: 'AngularJS'
    },
    {
      iconURL: '/assets/images/tech-icons/Bootstrap.svg',
      caption: 'Bootstrap'
    },
    {
      iconURL: '/assets/images/tech-icons/CSS3.svg',
      caption: 'CSS3'
    },
    {
      iconURL: '/assets/images/tech-icons/Express.svg',
      caption: 'Express'
    },
    {
      iconURL: '/assets/images/tech-icons/Git.svg',
      caption: 'Git'
    },
    {
      iconURL: '/assets/images/tech-icons/HTML5.svg',
      caption: 'HTML5'
    },
    {
      iconURL: '/assets/images/tech-icons/JavaScript.svg',
      caption: 'JavaScript'
    },
    {
      iconURL: '/assets/images/tech-icons/Node.js.svg',
      caption: 'Node.js'
    },
    {
      iconURL: '/assets/images/tech-icons/React.svg',
      caption: 'React'
    },
  ]
}
