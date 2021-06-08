import { Injectable } from "@angular/core";
import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { ItemService, LocationService } from ".";
import { TreeModel, ItemLocation, Item } from "../models";

@Injectable()
export class RouterService {
    constructor(
        private itemService: ItemService,
        private locationService: LocationService) {

    }


    /**202103
     * 116405, 202405, 201405, 203407, 204408, 205303
     */
    routeCreator(itemArray: Array<number> = [116405, 202405, 201405, 203407, 204408, 205303]) {

        return combineLatest([this.itemService.getMaterialList(itemArray), this.locationService.formatLocationArray()]).pipe(
            map(([_materials, _locationArray]) => {
                return this.locationFinder(_materials, _locationArray);
            }
            ),
        )

    }

    locationFinder(materialArray: Array<TreeModel>, locationArray: Array<Array<ItemLocation>>) {
        const materials: Array<Array<number>> = [];

        for (let item of materialArray) {
            materials.push(this.childFinder(item));
        }

        console.time('combo')

        console.log('combo', this.routeCombinations(locationArray, 15, materials))

        console.timeEnd('combo')


        return;
    }

    childFinder(items: TreeModel): Array<number> {
        if (!items.hasOwnProperty('child')) {
            return [items.code];
        }

        const materialArray = [...this.childFinder(items.child![0]), ...this.childFinder(items.child![1])];

        return materialArray;
    }

    routeCombinations(locationArray: Array<Array<ItemLocation>>, max: number, materialArray: Array<Array<number>>): Array<Array<Array<ItemLocation>>> {
        let all: Array<Array<Array<ItemLocation>>> = [];

        for (let i = 0; i < max + 1; i++) {
            this.combinationFunction(i, locationArray, [], all, materialArray);
        }

        return all;
    }

    combinationFunction(n: number, src: Array<Array<ItemLocation>>, got: Array<Array<ItemLocation>>, all: Array<Array<Array<ItemLocation>>>, materialArray: Array<Array<number>>): void {
        if (n == 0) {
            if (got.length > 0 && this.checkIfItemCompleted(got, materialArray)) {
                all[all.length] = got;
            }
            return;
        }

        for (let j = 0; j < src.length; j++) {
            if (!this.isLocationValid([src[j]], materialArray)) {
                continue;
            }
            this.combinationFunction(n - 1, src.slice(j + 1), got.concat([src[j]]), all, materialArray);
        }

        return;
    }

    isLocationValid(locationArray: Array<Array<ItemLocation>>, materialArray: Array<Array<number>>): boolean {
        let materials = materialArray.reduce((arr1, arr2) => arr1.concat(arr2))

        return locationArray.some(data => {
            return data.some(object => {
                return materials.includes(object.itemCode);
            })
        });
    }

    checkIfItemCompleted(comboArray: Array<Array<ItemLocation>>, materialArray: Array<Array<number>>): boolean {

        //stone (112101), leather (401103), water (301102), mithril (401304), meteorite (401209), tree of life (401208), VF (401401), starter pistol
        //find a way to implement character starting weapon
        let exemptList = [112101, 401103, 301102, 401304, 401209, 401208, 401401, 116101]

        let materials = materialArray.reduce((arr1, arr2) => arr1.concat(arr2)).filter(data => {
            return !exemptList.some(exempt => {
                return exempt == data
            })
        })

        return materials.every(data => {
            return comboArray.some(zone => {
                return zone.some(object => {
                    return data == object.itemCode
                })
            })
        });
    }

    permutator(locations: Array<string>) {

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