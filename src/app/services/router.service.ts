import { Injectable } from "@angular/core";
import { combineLatest } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ItemLocation } from "../models";
import { TreeModel } from "../models/tree.model";
import { ItemService } from "./item.service";
import { LocationService } from "./location.service";




@Injectable()
export class RouterService {
    constructor(
        private itemService: ItemService,
        private locationService: LocationService) {

    }

    routeCreator(itemArray: number[] = [116405, 202405, 201405, 203407, 204408, 205303]) {

        return combineLatest([this.itemService.getMaterialList(itemArray), this.locationService.formatLocationArray(), this.locationService.mapLocations()]).pipe(
            map(([_materials, _locationArray, _locationMap]) => {
                return this.locationFinder(_materials, _locationArray, _locationMap);
            }
            ),
        )

    }

    locationFinder(materialArray: TreeModel[], locationArray: ItemLocation[][], locationMap: Map<number, string>) {
        const materials: number[][] = [];

        for (let item of materialArray) {
            materials.push(this.childFinder(item));
        }

        this.getMaterialLocation(materials, locationArray);



        return;
    }

    childFinder(items: TreeModel): number[] { 
        if (!items.hasOwnProperty('child')) {
            return [items.code];
        }

        const materialArray = [...this.childFinder(items.child![0]), ...this.childFinder(items.child![1])];

        return materialArray;
    }


    /** fuck you */
    getMaterialLocation(materialArray: number[][], locationArray: ItemLocation[][]): ItemLocation[][] {
        return locationArray.filter(loc => loc.filter(item => materialArray.filter(res => {
            return res.includes(item.itemCode)
        })));
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