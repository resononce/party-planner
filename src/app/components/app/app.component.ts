import { Component, OnInit } from '@angular/core';
import {WeaponService} from '../../services/weapon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  
  constructor(
    private weaponService: WeaponService
  ){
  }

  ngOnInit() {
    this.getAllWeapon();
    this.getWeaponById();
  }

  getAllWeapon() {
    
    return this.weaponService.getAllWeapon();
  }

  getWeaponById() {
    this.weaponService.getWeaponById(101101);
  }

}
