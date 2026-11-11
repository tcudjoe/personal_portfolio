import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {PageNotFoundComponent} from "../shared/components/page-not-found/page-not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {WorkComponent} from "./pages/work/work.component";
import {WorkDetailComponent} from "./pages/work-detail/work-detail.component";
import {WritingComponent} from "./pages/writing/writing.component";
import {AboutComponent} from "./pages/about/about.component";
import {WritingDetailComponent} from "./pages/writing-detail/writing-detail.component";

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
