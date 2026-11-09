import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechRoutingModule } from './tech-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SkillsComponent,
    ExperienceComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TechRoutingModule,
    SharedModule
  ]
})
export class TechModule { }
