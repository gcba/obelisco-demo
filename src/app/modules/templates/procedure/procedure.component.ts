import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavbarModule } from '@gcba/ngx-obelisco/navbar';
import { OFooterComponent } from '@gcba/ngx-obelisco/footer';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';
import { OBreadcrumbComponent } from '@gcba/ngx-obelisco/breadcrumb';
import { OListModule } from '@gcba/ngx-obelisco/list';
import { Collapse, Step } from '@gcba/ngx-obelisco/core/models';
import { BreadcrumbService } from '@gcba/ngx-obelisco/core/services';
import { OCollapseComponent } from '@gcba/ngx-obelisco/collapse';
import { OBlockModule } from '@gcba/ngx-obelisco/block';
import { TEMPLATES_ROUTES_SEARCHBARITEMS } from 'src/app/constants/navbar.constants';

@Component({
  selector: 'app-procedure',
  standalone: true,
  imports: [
    CommonModule,
    ONavbarModule,
    OFooterComponent,
    OButtonComponent,
    OBreadcrumbComponent,
    OListModule,
    OCollapseComponent,
    OBlockModule,
  ],
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.scss'],
})
export class ProcedureComponent implements OnInit {
  //navbar
  public routes = [
    {
      title: 'Templates',
      route: '/templates',
    },
  ];

  public searchbarItems = TEMPLATES_ROUTES_SEARCHBARITEMS;

  //Lista de pasos
  public stepItem: Step = {
    title: 'Título del paso',
    description:
      'En esta descripción del paso se muestran los detalles principales de las acciones que deberá realizar la persona usuaria posteriormente.',
  };
  public stepItems: Step[] = [];

  //Colapsable
  public collapseItem: Collapse = {
    title: 'Título',
    content:
      'Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar demasiado texto, para generar una lectura óptima.',
  };

  public collapseItems: Collapse[] = [];

  //Breadcrumb
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.breadcrumb$.next({
      routes: [
        { name: 'Jefe de Gobierno', route: '/' },
        { name: 'Trámites', route: '/' },
        { name: 'Título del trámite', route: '/' },
      ],
      defaultRoute: '/route-default',
    });

    for (let i = 0; i < 5; i++) {
      if (i < 3) {
        this.stepItems.push(this.stepItem);
      }
      this.collapseItems.push(this.collapseItem);
    }
  }
}
