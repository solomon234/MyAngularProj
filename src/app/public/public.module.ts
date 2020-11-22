import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { PlayPage } from './pages/play/play.page';

import { InternalServerErrorPage } from './pages/internal-server-error/internal-server-error.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { PublicRoutingModule } from './public-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [HomePage, InternalServerErrorPage, NotFoundPage, PlayPage],
  imports: [CommonModule, PublicRoutingModule, MatSliderModule, MatListModule, RouterModule, FontAwesomeModule],
})
export class PublicModule { }
