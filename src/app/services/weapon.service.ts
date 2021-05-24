import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { Response, Weapon } from "../models";
import { httpSettings } from "../utils";

const apiUrl = 'https://open-api.bser.io/v1/data/ItemWeapon';

@Injectable()
export class WeaponService extends httpSettings{

    public readonly _weapons = new BehaviorSubject([]);

    constructor(
        private http: HttpClient,
    ) {
        super();
    }

    initializeWeaponArray() {
        this.http.get<Response>(apiUrl, this.httpOptions).pipe(
            map(
                res => {
                    return res.data as Array<Weapon>;
                }
            ),
            tap(
                data => {
                    this._weapons.next(data);
                }
            )
        );
    }

    fetchByWeaponID(itemCode: number) {
        return this._weapons.pipe(
            map(x => {
                console.log(x);
                return x.find(y => y.code == itemCode);
            }),
        );
    }

}


