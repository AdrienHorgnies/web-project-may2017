import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems = [
    {
      route: '/accueil',
      value: 'Accueil'
    },
    {
      route: '/informations',
      value: 'Informations'
    },
    {
      route: '/formations',
      value: 'Formations'
    },
    {
      route: '/news',
      value: 'News'
    },
    {
      route: '/partenariats',
      value: 'Partenariats'
    },
    {
      route: '/qualite',
      value: 'Qualite'
    },
    {
      route: '/contact',
      value: 'Contact'
    }
  ];
  selectedMenuItem = this.menuItems[0].route;

  selectThisMenuItem(menuItem: string) {
    console.log(`From ${this.selectedMenuItem} to ${menuItem}`);
    this.selectedMenuItem = menuItem;
  }

  constructor() { }

  ngOnInit() {
  }

}
