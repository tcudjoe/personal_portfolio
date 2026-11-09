import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {PageNotFoundComponent} from "../shared/components/page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {WorkComponent} from "./work/work.component";
import {WorkDetailComponent} from "./work-detail/work-detail.component";
import {WritingComponent} from "./writing/writing.component";
import {AboutComponent} from "./about/about.component";
import {WritingDetailComponent} from "./writing-detail/writing-detail.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'work',
        component: WorkComponent
      },
      {
        path: 'work/:slug',
        component: WorkDetailComponent
      },
      {
        path: 'writing',
        component: WritingComponent
      },
      {
        path: 'writing/:slug',
        component: WritingDetailComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '404',
        component: PageNotFoundComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechRoutingModule {
}
