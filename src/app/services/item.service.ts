import { Injectable } from "@angular/core";
import { Observable, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { WeaponService, ArmorService, MiscService, ConsumableService } from ".";
import { Item } from "../models";



@Injectable()
export class ItemService {

    constructor(
        private weaponService: WeaponService,
        private armorService: ArmorService,
        private miscService: MiscService,
        private consumableService: ConsumableService,
    ) {
    }


    combineAllItems(): Observable<Map<number, Item>> {
        return combineLatest([this.weaponService.initializeWeaponArray(), this.armorService.initializeArmorArray(), this.miscService.initializeMiscArray(), this.consumableService.initializeConsumableArray()]).pipe(
            map( ([_weapons, _armors, _miscs, _consumable]) => {
                return new Map([..._weapons, ..._armors, ..._miscs, ..._consumable].map(e => [e.code, e]));
            }),
        )
    }

    getMaterialList() {
        return this.combineAllItems().pipe(
            map((res) => {
                return this.itemRecursion(116405, res)
            })
        )
    }

    itemRecursion(itemCode: number = 0, itemArray: { get: (arg0: number) => any; }): Object {
        if (itemArray.get(itemCode).makeMaterial1 == 0) {
            return {code: itemCode};
        }

        return {code: itemCode, child: [this.itemRecursion(itemArray.get(itemCode).makeMaterial1, itemArray), this.itemRecursion(itemArray.get(itemCode).makeMaterial2, itemArray)]};
    }


}
