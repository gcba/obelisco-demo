import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './templates/education/education.component';

const routes: Routes = [
  {
    path: 'templates/education',
    component: EducationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionTemplatesRoutingModule {}
