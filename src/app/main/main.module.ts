import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LayoutComponent } from './components/layout/layout.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutMeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule
  ]
})
export class MainModule { }
