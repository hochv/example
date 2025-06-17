import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterOutlet
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { } 