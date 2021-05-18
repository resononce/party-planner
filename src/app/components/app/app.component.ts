import { Component, OnInit } from '@angular/core';
import { WeaponService, ArmorService, MiscService } from '../../services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{

  constructor(
    private weaponService: WeaponService,
    private armorService: ArmorService,
    private miscService: MiscService,
  ){
  }

  ngOnInit() {
    this.getAllWeapon();
    this.getWeaponById();
    this.getAllArmor();
    this.getArmorById();
    this.getAllMisc();
    this.getMiscById();
  }

  getAllWeapon() {
    return this.weaponService.getAllWeapon().subscribe(weapons => {
      console.log(weapons);
    },
    error => {
      console.log(error);
    });
  }

  getWeaponById() {
    this.weaponService.getWeaponById(101201).subscribe(weapons => {
      console.log(weapons);
    },
    error => {
      console.log(error);
    });
  }
  getAllArmor() {
    return this.armorService.getAllArmor().subscribe(armor => {
      console.log(armor);
    },
    error => {
      console.log(error);
    });
  }

  getArmorById() {
    this.armorService.getArmorById(201101).subscribe(armor => {
      console.log(armor);
    },
    error => {
      console.log(error);
    });
  }

  getAllMisc() {
    return this.miscService.getAllMisc().subscribe(misc => {
      console.log(misc);
    },
    error => {
      console.log(error);
    });
  }

  getMiscById() {
    this.miscService.getWMiscById(401101).subscribe(misc => {
      console.log(misc);
    },
    error => {
      console.log(error);
    });
  }

}
