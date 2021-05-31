import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';
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

    initializeWeaponArray(): Observable<Weapon[]> {
        return this.http.get<Response>(apiUrl, this.httpOptions).pipe(
            map(
                res => {
                    return res.data as Array<Weapon>;
                }
            )
        );
    }

}


