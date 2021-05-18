import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Response, Weapon } from "../models";
import { httpSettings } from "../utils";

const apiUrl = 'https://open-api.bser.io/v1/data/ItemWeapon';

@Injectable()
export class WeaponService extends httpSettings{

    constructor(
        private http: HttpClient,
    ) {
        super();
    }

    getAllWeapon(): Observable<Array<Weapon>> {
        return this.http.get<Response>(apiUrl, this.httpOptions).pipe(
            map(
                res => {
                    return res.data as Array<Weapon>;
                }
            ),
        );
    }

    getWeaponById(itemCode: number): Observable<Weapon> {
        return this.getAllWeapon().pipe(
            map(x => x.find(y => y.code == itemCode)),
        ); 
    }
}
