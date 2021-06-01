import { Injectable } from "@angular/core";
import { Observable, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { WeaponService, ArmorService, MiscService, ConsumableService } from ".";
import { Item } from "../models";
import { TreeModel } from "../models/tree.model";



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
            map(([_weapons, _armors, _miscs, _consumable]) => {
                return new Map([..._weapons, ..._armors, ..._miscs, ..._consumable].map(e => [e.code, e]));
            }),
        )
    }

    getMaterialList(itemArray: number[]): Observable<TreeModel[]> {

        return this.combineAllItems().pipe(
            map((res) => {
                let craftedArray: TreeModel[] = []
                for (let item of itemArray) {
                    if (item == null) {
                        craftedArray.push(item);
                    }
                    craftedArray.push(this.itemRecursion(item, res));
                }
                return craftedArray;
            })
        )
    }

    itemRecursion(itemCode: number = 0, itemArray: { get: (arg0: number) => any; }): TreeModel {
        if (itemArray.get(itemCode).makeMaterial1 == 0) {
            return { code: itemCode };
        }

        return { code: itemCode, child: [this.itemRecursion(itemArray.get(itemCode).makeMaterial1, itemArray), this.itemRecursion(itemArray.get(itemCode).makeMaterial2, itemArray)] };
    }


}
