import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavbarModule } from '@gcba/ngx-obelisco/navbar';
import { OFooterComponent } from '@gcba/ngx-obelisco/footer';
import { OCardModule } from '@gcba/ngx-obelisco/card';
import { OHighlightedModule } from '@gcba/ngx-obelisco/highlighted';
import { OButtonComponent } from '@gcba/ngx-obelisco/button';

import {
  TEMPLATES_ROUTES_SEARCHBARITEMS,
} from 'src/app/constants/navbar.constants';
import { CardVerical, Media, NavbarRouteLogin } from '@gcba/ngx-obelisco/core/models';

@Component({
  selector: 'app-culture',
  standalone: true,
  imports: [CommonModule, ONavbarModule, OFooterComponent, OCardModule, OHighlightedModule, OButtonComponent],
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent {
  public routes = [
    {
      title: 'Templates',
      route: '/templates',
    },
  ];

  public searchbarItems = TEMPLATES_ROUTES_SEARCHBARITEMS;

  //navbar
  public routesLogin: NavbarRouteLogin = {
    title: 'Ingresar',
    route: '/'
  };

  //destacado
  public titleBanner: string = 'Vivamos Cultura';

  public descriptionBanner: string = 'Es la nueva plataforma que busca dar a conocer el trabajo de los artistas tanto de la cultura independiente como de los diferentes espacios del Ministerio de Cultura de la Ciudad. Vas a poder disfrutar las diferentes propuestas culturales de manera online: obras de teatro, películas, recitales, talleres y mucho más, para todas las edades.';

  public imgBanner: Media = {
    src: '../../assets/templates/cultura/cultura-panel.png',
    alt: 'Vivamos Cultura'
  };

  //tarjetas Espacios Culturales
  public ItemsCulturalSpaces: CardVerical[] = [
    {
      title: 'Museos',
      description: 'Conocé los once museos que la Ciudad tiene para vos.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-7.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Centro Cultural Recoleta',
      description: 'Conocé los espacios para exhibiciones, obras, conciertos, conferencias y más.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-8.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'El Cultural San Martín',
      description: 'Conocé toda la programación y participa de cursos y talleres.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-9.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Usina del Arte',
      description: 'Visitá el centro cultural multidisciplinario, declarado Patrimonio histórico dela Ciudad.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-10.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Teatro Colón',
      description: 'Visitá uno de los teatros más importante del mundo.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-11.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Estudio Urbano',
      description: 'Capacitate en oficios vinculados con la música y herramientas de gestión para proyectos artísticos.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-12.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Complejo Teatral',
      description: 'Nuclea los cinco teatros públicos de la Ciudad.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-13.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Centro Cultural 25 de mayo',
      description: 'Punto de encuentro y desarrollo cultural y creativo para los vecinos.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-14.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Música',
      description: 'Disfrutá de la Banda Sinfónica, la Orquesta de Tango y los talleres de Estudio Urbano.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-15.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Casco histórico',
      description: 'Inscribite en jornadas, visistas guiadas y participá de la formación en artes y oficios de la escuela taller.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-16.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Enseñanza Artística',
      description: 'Conocé la oferta de carreras, cursos y talleres de los espacios de enseñanza artística que la Ciudad tiene para vos.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-17.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Espacio Casa de la Cultura',
      description: 'Antigua sede del diario La Prensa, declarado Monumento Histórico Nacional.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-18.png',
      alt: 'Descripción de imagen'}
    },
    {
      title: 'Artes visuales',
      description: 'Conocé la oferta cultural de las artes visuales de la Ciudad.',
      route: '/',
      image: {src: '../../assets/templates/cultura/cultura-19.png',
      alt: 'Descripción de imagen'}
    }
  ]
}
