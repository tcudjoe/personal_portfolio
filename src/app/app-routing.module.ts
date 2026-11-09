import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tech/tech.module').then((m) => m.TechModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music.module').then((m) => m.MusicModule)
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
