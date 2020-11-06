import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdTabsetBasicComponent } from './ngbd-tabset-basic/ngbd-tabset-basic.component';
import { NgbdAccordionBasicComponent } from './ngbd-accordion-basic/ngbd-accordion-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdTabsetBasicComponent,
    NgbdAccordionBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
