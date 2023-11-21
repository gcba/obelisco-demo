import { Component, OnInit } from '@angular/core';
import { AccessList } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'app-section-templates',
  templateUrl: './section-templates.component.html',
  styleUrls: ['./section-templates.component.scss'],
})
export class SectionTemplatesComponent {
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
}
