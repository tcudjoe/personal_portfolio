import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
