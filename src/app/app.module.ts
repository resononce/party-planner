import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/index';
import { ArmorService, ItemService, MiscService, WeaponService } from './services/';
import { ConsumableService } from './services/consumable.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeaponService,
    ArmorService, 
    MiscService,
    ItemService,
    ConsumableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
