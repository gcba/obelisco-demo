import { Component, OnInit } from '@angular/core';
import { AccessList } from '@gcba/ngx-obelisco/core/models';
import {
  TEMPLATES_ROUTES,
  TEMPLATES_ROUTES_SEARCHBARITEMS,
} from 'src/app/constants/navbar.constants';

@Component({
  selector: 'app-section-templates',
  templateUrl: './section-templates.component.html',
  styleUrls: ['./section-templates.component.scss'],
})
export class SectionTemplatesComponent {
  public routes = TEMPLATES_ROUTES;
  public searchbarItems = TEMPLATES_ROUTES_SEARCHBARITEMS;

  public items: AccessList = {
    header: {
      title: 'Título del acceso',
      description: 'Descripción del acceso',
      iconText: 'N°',
    },
    children: [
      {
        title: 'Educación',
        icon: 'bx bxs-tag-alt',
        route: '/templates/education',
      },
      {
        title: 'Acceso',
        description: 'Descripción (Opcional)',
        icon: 'bx bxs-tag-alt',
        route: '/home',
      },
      {
        title: 'Acceso',
        description: 'Descripción (Opcional)',
        icon: 'bx bxs-tag-alt',
        route: '/home',
      },
    ],
    footer: {
      title: 'Acceso grande',
      icon: 'info',
      route: '/home',
    },
  };
  public itemsProcedure: AccessList = {
    header: {
      title: 'Trámites',
      description: 'Modelo de ejemplo',
      icon: 'bx bxs-spreadsheet',
      iconPositionRight: true
    },
    children: [
      {
        title: 'Trámites',
        icon: 'bx bxs-tag-alt',
        route: '/templates/procedure',
      }
    ],
    footer: {
      title: 'Acceso grande',
      icon: 'info',
      route: '/home',
    },
  };
}
