import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThirukuralService } from './thirukural.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ThirukuralService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
