import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionTemplatesComponent } from './modules/section-templates/section-templates.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'templates',
    component: SectionTemplatesComponent,
    loadChildren: () =>
      import('./modules/section-templates/section-templates.module').then(
        (m) => m.SectionTemplatesModule
      ),
  },

  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
