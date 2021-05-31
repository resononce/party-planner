import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { ItemLocation } from "../models";
import { TreeModel } from "../models/tree.model";
import { ItemService } from "./item.service";
import { LocationService } from "./location.service";




@Injectable()
export class RouterService {
    constructor(
        private itemService: ItemService,
        private locationService: LocationService
    ) {

    }

    routeCreator(itemArray = [116405, 202405, 201405, 203407, 204408, 205303]) {

        return this.itemService.getMaterialList(itemArray).pipe(
            map(data => {
                return this.locationFinder(data);
            }
            ),
            tap(res => {
                console.log(res)
            })
        )

    }

    locationFinder(materialArray: Object[]) {
        let locations;
        const materials: any[] = [];

        for (let item of materialArray) {
            materials.push(this.childFinder(item));
        }


        return locations;
    }

    childFinder(items: any): any {
        if (!items.hasOwnProperty('child')) {
            return items.code;
        }

        const materialArray = [this.childFinder(items.child![0]), this.childFinder(items.child![1])];

        return materialArray.reduce((acc, val) => acc.concat(val), []);
    }

    getMaterialLocation(materialArray: any, locationArray: number[]): any {
        
    }




    permutator(locations: any, size: number) {
        
        if (size == 1) {
            console.log(locations);
            return;
        }
        
        for(let i = 0; i < size - 1; i += 1) {
            this.permutator(locations, size - 1)

            if (size % 2) {
                [locations[i], locations[size - 1]] = [locations[size - 1], locations[i]];
            }
            else {
                [locations[0], locations[size - 1]] = [locations[size - 1], locations[0]]
            }
        }
    }

}