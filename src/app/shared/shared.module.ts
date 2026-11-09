import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";


@NgModule({
  declarations: [
    PageNotFoundComponent,
    BlogsComponent,
    BlogDetailComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
