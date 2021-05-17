import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { Weapon, Response } from "../models";


//curl -X GET "https://open-api.bser.io/v1/data/ItemWeapon" -H "accept: application/json" -H "x-api-key: kw4EJ6mGnDan79JbBZsJx5RJYfQcQLXc8XM2Aqej"

const apiKey = 'kw4EJ6mGnDan79JbBZsJx5RJYfQcQLXc8XM2Aqej';

const httpHeader = {
    'accept': 'application/json',
    'x-api-key': apiKey,  
};
const httpOptions = {
    headers: new HttpHeaders(httpHeader),
};


@Injectable()
export class WeaponService {
    test;

    constructor(
        private http: HttpClient,
    ) {
    }

    

    getAllWeapon() {
        const res =  this.http.get<Response>('https://open-api.bser.io/v1/data/ItemWeapon', httpOptions)
        .pipe(
            tap(
                data => this.test = data.data
            )
        );

        console.log(this.test);
        return res;

    }

    getWeaponById(itemCode: number) {
        


        return ;



        
    }

}
