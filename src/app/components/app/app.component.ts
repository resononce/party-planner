import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item, Weapon } from 'src/app/models';
import { RouterService } from 'src/app/services/router.service';
import { tList } from 'src/app/utils'

import { WeaponService, ArmorService, MiscService, ItemService } from '../../services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  weaponsArray!: Observable<Weapon[]>;
  tList = tList;


  constructor(
    private weaponService: WeaponService,
    private routerService: RouterService
  ) {
  }

  ngOnInit() {
    this.weaponsArray = this.weaponService.initializeWeaponArray();
    this.routerService.routeCreator();
  } 
  
}
