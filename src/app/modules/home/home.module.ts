import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ONavbarModule } from '@gcba/ngx-obelisco/navbar';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HighlightModule, ONavbarModule],
})
export class HomeModule {}
