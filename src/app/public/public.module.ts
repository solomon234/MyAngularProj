import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { InternalServerErrorPage } from './pages/internal-server-error/internal-server-error.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { PublicRoutingModule } from './public-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePage, InternalServerErrorPage, NotFoundPage],
  imports: [CommonModule, PublicRoutingModule,MatSliderModule,MatListModule,RouterModule],
})
export class PublicModule {}
