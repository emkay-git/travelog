import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { StoryComponent } from './story/story.component';
import { TeaserComponent } from './teaser/teaser.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StoryComponent,
    TeaserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
