import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PanningModule } from './panning/panning.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, PanningModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
