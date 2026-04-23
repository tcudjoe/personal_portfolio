import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '',
    loadChildren: () => import('./tech/tech-routing.module').then((m) => m.TechRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('./music/music-routing.module').then((m) => m.MusicRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('./main/main-routing.module').then((m) => m.MainRoutingModule)
  },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
