import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule,
    RouterModule.forRoot([
          {
              path: 'about',
              component: AboutComponent
          }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
