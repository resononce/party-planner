import { Injectable } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Item } from "../models";
import { ArmorService } from "./armor.service";
import { MiscService } from "./misc.service";
import { WeaponService } from "./weapon.service";


@Injectable()
export class ItemService {

    constructor(
        private weaponService: WeaponService,
        private armorService: ArmorService,
        private miscService: MiscService
    ) {
    }


    combineAllItems(): Observable<Map<number, Item>> {

        return combineLatest([this.weaponService.initializeWeaponArray(), this.armorService.initializeArmorArray(), this.miscService.initializeMiscArray()]).pipe(
            map( ([_weapons, _armors, _miscs]) => {
                return new Map([..._weapons, ..._armors, ..._miscs].map(e => [e.code, e]));
            }),
            tap(res => {
                console.log("test", res);
            })
        )


    }

    getMaterialList() {
        console.log("whwhwhwh", this.combineAllItems()
            .toPromise()
            .then(res => {
                console.log(res.get(116405)?.makeMaterial2);
            }    
            ));


    }


    itemRecursion(itemCode: number = 0, itemArray: { get: (arg0: number) => any; }) {
        if (itemArray.get(116405)) {

        }


    }


}
