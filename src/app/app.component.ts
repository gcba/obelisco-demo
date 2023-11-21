import { Component } from '@angular/core';
import { NavbarRoute, SearchbarItem } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routes: NavbarRoute[] = [
    {
      title: 'Templates',
      route: 'templates',
    },
  ];

  searchbarItems: SearchbarItem[] = [
    {
      title: 'Inicio',
      route: '/',
    },
    {
      title: 'Templates',
      route: 'templates',
    },
  ];
}
