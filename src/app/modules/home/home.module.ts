import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PrismDirective, HighlightModule],
})
export class HomeModule {}
