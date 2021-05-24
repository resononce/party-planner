import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WeaponService, ArmorService, MiscService } from '../../services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  weaponsArray;

  constructor(
    private weaponService: WeaponService,
    private armorService: ArmorService,
    private miscService: MiscService,
  ) {
    this.weaponService.initializeWeaponArray();
  }

  ngOnInit() {
    this.weaponService._weapons.subscribe(weapons => {
      console.log(weapons);
      this.weaponsArray = weapons;
    },
      error => {
        console.log(error);
      });
  }




    
  
}
