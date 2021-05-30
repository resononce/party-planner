import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/index';
import { ArmorService, ItemService, MiscService, WeaponService } from './services/';
import { ConsumableService } from './services/consumable.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'angular-material.module';
import { RouterService } from './services/router.service';

@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [
    WeaponService,
    ArmorService, 
    MiscService,
    ItemService,
    ConsumableService,
    RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
