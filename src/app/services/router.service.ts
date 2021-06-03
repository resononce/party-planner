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

    routeCombinations(locationArray: Array<string>, max: number): Array<Array<string>> {
        let all: Array<Array<string>> = [];
        for(let i = 0; i < max + 1; i++) {
            this.combinationFunction(i, locationArray, [], all);
        }

        return all;
    }

    combinationFunction(n: number, src: Array<string>, got: Array<string>, all: Array<Array<string>>) {
        if(n == 0) {
            if(got.length > 0) {
                all[all.length] = got;
            }
            return;
        }

        for(let j = 0; j < src.length; j++) {
            this.combinationFunction(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }

        return;
    }

    permutator(locations: string[]) {

        const bigBOI: Array<Array<string>> = []


        let i, j, tmp;
        let N = locations.length;

        let p = new Array(N);

        for (i = 0; i < N; i++) {
            p[i] = 0;
        }

        i = 1;

        bigBOI.push([...locations]);

        while (i < N) {
            if (p[i] < i) {
                j = (i % 2) * p[i];
                tmp = locations[j];
                locations[j] = locations[i];
                locations[i] = tmp;
                bigBOI.push([...locations]);
                p[i]++;
                i = 1;
            }
            else {
                p[i] = 0;
                i++;
            }
        }

        return bigBOI;
    }

}