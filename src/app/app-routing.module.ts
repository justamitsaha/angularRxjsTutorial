import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PromiseComponent} from './promise/promise.component'
import { from } from 'rxjs';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'promise',
    pathMatch: 'full',
  },
  {
    path: 'promise',
    component: PromiseComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
  },
  {
    path: 'forkjoin',
    component: ForkjoinComponent,
  },
  {
    path: 'async&Await',
    component: AsyncAwaitComponent,
  },
  {
    path: 'map',
    component: MapComponentComponent,
  },
  {
    path: 'from',
    component: FromEventComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
