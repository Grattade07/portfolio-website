import { Component, HostListener, OnInit } from '@angular/core';

import { faGlobe, faBars } from '@fortawesome/free-solid-svg-icons';

import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbDropdownConfig],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    console.log(this.innerWidth);
    this.innerWidth = window.innerWidth;
  }

  constructor(config: NgbDropdownConfig) {
    this.onResize();

    config.placement = 'bottom-end';
    config.autoClose = true;
  }

  faGlobe = faGlobe;
  faHamMenu = faBars;

  innerWidth: any;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
}
