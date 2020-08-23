import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    AsyncAwaitComponent,
    MapComponentComponent,
    ObservableComponent,
    FromEventComponent,
    ForkjoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
