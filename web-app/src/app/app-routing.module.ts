import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './views/play/play.component';
import { DontPlayComponent } from './views/dont-play/dont-play.component';
import { QueryComponent } from './views/query/query.component';

const routes: Routes = [
  { path: '', component: QueryComponent },
  { path: 'play', component: PlayComponent },
  { path: 'dont-play', component: DontPlayComponent },
  { path: '**', component: QueryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
