import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Weapon } from "src/app/models";
import { WeaponService, RouterService, LocationService } from "src/app/services";
import { tList } from "src/app/utils";

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
    //

    //this.routerService.test(['Alley', 'Temple', 'Avenue', 'Pond', 'Hospital', 'Archery Range', 'School', 'Cemetery', 'Factory', 'Hotel', 'Forest', 'Chapel', 'Beach', 'Uptown', 'Dock'])
    console.time('doSomething')

    this.routerService.routeCreator().toPromise();

    console.timeEnd('doSomething')
  }

  tester() {
    return this.routerService.permutator(['Alley', 'Temple', 'Avenue', 'Pond']);

  }

  test() {
    return this.routerService.routeCreator().toPromise();

  }

}
