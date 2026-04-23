import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechRoutingModule } from './tech-routing.module';
import { BlogComponent } from './blog/blog.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    BlogComponent,
    SkillsComponent,
    ExperienceComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TechRoutingModule
  ]
})
export class TechModule { }
