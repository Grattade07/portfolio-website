import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: {projectName: string, projectDescription:string, projectSourceURL: string, projectHostURL: string, previewImgPath: string}[] = [
    {
      projectName: 'Web Project List',
      projectDescription: 'Application built using React and Express that allows a user to interact with a custom API to create and manage a list of web applications',
      projectSourceURL: 'https://github.com/Grattade07/Web-Project-List',
      projectHostURL: 'https://web-project-list.onrender.com/',
      previewImgPath: '/assets/project-preview-imgs/Web-Project-List-Preview.png'
    },
    {
      projectName: 'Web Project List',
      projectDescription: 'Application built using React and Express that allows a user to interact with a custom API to create and manage a list of web applications',
      projectSourceURL: 'https://github.com/Grattade07/Web-Project-List',
      projectHostURL: 'https://web-project-list.onrender.com/',
      previewImgPath: '/assets/project-preview-imgs/Web-Project-List-Preview.png'
    },
  ]
}
