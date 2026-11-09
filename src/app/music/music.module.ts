import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { ExprienceComponent } from './exprience/exprience.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    ExprienceComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
