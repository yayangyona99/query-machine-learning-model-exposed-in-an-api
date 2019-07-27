import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlayComponent } from './views/play/play.component';
import { DontPlayComponent } from './views/dont-play/dont-play.component';
import { QueryComponent } from './views/query/query.component'

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    DontPlayComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
