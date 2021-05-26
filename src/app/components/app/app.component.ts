import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item, Weapon } from 'src/app/models';

import { WeaponService, ArmorService, MiscService, ItemService } from '../../services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  weaponsArray: Observable<Weapon[]> | undefined;


  constructor(
    private weaponService: WeaponService,
    private armorService: ArmorService,
    private miscService: MiscService,
    private itemService: ItemService
  ) {
  }

  ngOnInit() {
    //this.weaponsArray = this.weaponService.initializeWeaponArray();
    this.itemService.getMaterialList();
  } 
  
}
