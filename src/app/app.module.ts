import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoxComponent } from './box/box.component';
import { SmiddleComponent } from './smiddle/smiddle.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [ 
  {path:'foot',component: FooterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoxComponent,
    SmiddleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
