import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Response, Weapon } from "../models";


//curl -X GET "https://open-api.bser.io/v1/data/ItemWeapon" -H "accept: application/json" -H "x-api-key: kw4EJ6mGnDan79JbBZsJx5RJYfQcQLXc8XM2Aqej"

const apiKey = 'kw4EJ6mGnDan79JbBZsJx5RJYfQcQLXc8XM2Aqej';
const apiUrl = 'https://open-api.bser.io/v1/data/ItemWeapon';

const httpHeader = {
    'x-api-key': apiKey,  
};
const httpOptions = {
    headers: new HttpHeaders(httpHeader),
};


@Injectable()
export class WeaponService {

    constructor(
        private http: HttpClient,
    ) {
    }
    

    getAllWeapon(): Observable<Array<Weapon>> {
        return this.http.get<Response>(apiUrl, httpOptions).pipe(
            map(
                res => {
                    return res.data as Array<Weapon>;
                }
            ),
        );
    }

    getWeaponById(itemCode: number): Observable<Weapon> {
        return this.getAllWeapon().pipe(
            map(x => {
                return x.find(y => {
                    return y.code == itemCode;
                })
            }),
        ); 
    }

}
