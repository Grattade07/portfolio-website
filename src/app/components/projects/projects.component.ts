import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: {projectName: string, projectDescription:string, projectSourceURL: string, projectHostURL: string, previewImgPath: string}[] = [
    {
      projectName: 'Lab Inventory Management System',
      projectDescription: 'A mock inventory management for a laboratory. Built using React and Bootstrap on the frontend, with Express and Mongoose communicating with MongoDB, using a custom API, with middleware and JWTokens used to authenticate users.',
      projectSourceURL: 'https://github.com/Grattade07/laboratory-inventory',
      projectHostURL: 'https://laboratory-inventory.onrender.com/',
      previewImgPath: '/assets/images/project-previews/Lab-Inventory-List-Preview.png'
    },
    {
      projectName: 'Web Project List',
      projectDescription: 'Application built using React and Express that allows a user to interact with a custom API to create and manage a list of web applications.',
      projectSourceURL: 'https://github.com/Grattade07/Web-Project-List',
      projectHostURL: 'https://web-project-list.onrender.com/',
      previewImgPath: '/assets/images/project-previews/Web-Project-List-Preview.png'
    },
  ]
}
