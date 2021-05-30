import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { ItemService } from "./item.service";




@Injectable()
export class RouterService {
    constructor(
        private itemService: ItemService
    ) {

    }

    routeCreator(itemArray = [116405, 202405, 201405, 203407, 204408, 205303]) {

        const material = this.itemService.getMaterialList(itemArray).pipe(
            map(res => {

            }
            )
        )

        this.itemService.getMaterialList(itemArray).subscribe(res => {
            console.log(res);
        }
        )
        
    }

    locationFinder(materialArray = []) {

    }

}