import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapon } from 'src/app/models';
import { LocationService } from 'src/app/services/location.service';
import { RouterService } from 'src/app/services/router.service';
import { tList } from 'src/app/utils'

import { WeaponService, ArmorService, MiscService, ItemService } from '../../services';


@Component({
  selector: 'app-root',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {

  weaponsArray!: Observable<Weapon[]>;
  tList = tList;



  constructor(
    private weaponService: WeaponService,
    private routerService: RouterService,
    private locationService: LocationService,
  ) {

  }

  ngOnInit() {
    this.weaponsArray = this.weaponService.initializeWeaponArray();
    //this.routerService.routeCreator().toPromise();

    //this.routerService.test(['Alley', 'Temple', 'Avenue', 'Pond', 'Hospital', 'Archery Range', 'School', 'Cemetery', 'Factory', 'Hotel', 'Forest', 'Chapel', 'Beach', 'Uptown', 'Dock'])
    console.time('doSomething')

    console.log(this.test());

    console.timeEnd('doSomething')
  }

  tester() {
    return this.routerService.permutator(['Alley', 'Temple', 'Avenue', 'Pond']);

  }

  test() {
    return this.routerService.routeCombinations(['Alley', 'Temple', 'Avenue', 'Pond', 'Hospital', 'Archery Range', 'School', 'Cemetery', 'Factory', 'Hotel', 'Forest', 'Chapel', 'Beach', 'Uptown', 'Dock'], 6)
  }

}
