import { Component } from '@angular/core';
import {
  TEMPLATES_ROUTES,
  TEMPLATES_ROUTES_SEARCHBARITEMS,
} from 'src/app/constants/navbar.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public routes = TEMPLATES_ROUTES;
  public searchbarItems = TEMPLATES_ROUTES_SEARCHBARITEMS;

  public code = `  // Explora
  www.ngx-obelisco.com

  // Instalación con npm
  npm install @gcba/ngx-obelisco
`;
}
