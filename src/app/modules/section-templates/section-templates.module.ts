import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTemplatesRoutingModule } from './section-templates-routing.module';
import { SectionTemplatesComponent } from './section-templates.component';
import { OAccessModule } from '@gcba/ngx-obelisco/access';

@NgModule({
  declarations: [SectionTemplatesComponent],
  imports: [CommonModule, SectionTemplatesRoutingModule, OAccessModule],
})
export class SectionTemplatesModule {}
