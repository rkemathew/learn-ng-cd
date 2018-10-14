import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ACompComponent } from './a-comp/a-comp.component';
import { BCompComponent } from './b-comp/b-comp.component';
import { AaCompComponent } from './a-comp/aa-comp/aa-comp.component';
import { AcCompComponent } from './a-comp/ac-comp/ac-comp.component';
import { BbCompComponent } from './b-comp/bb-comp/bb-comp.component';
import { BcCompComponent } from './b-comp/bc-comp/bc-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    ACompComponent,
    BCompComponent,
    AaCompComponent,
    AcCompComponent,
    BbCompComponent,
    BcCompComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
