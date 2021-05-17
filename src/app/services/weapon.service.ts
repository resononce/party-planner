import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ItemWeapon } from "../models/itemWeapon.model";
import { map } from 'rxjs/operators';

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
    test = [];
    test1;

    constructor(
        private http: HttpClient,
    ) {
    }


    async getAllWeapon() {
        const result = this.http.get<Exclude<"code" | "message" | "data", "code" | "message">>('https://open-api.bser.io/v1/data/ItemWeapon', httpOptions).subscribe(weapons => {
            console.log(weapons);
          },
          error => {
            console.log(error);
          });
          
        return result;
    }

    getWeaponById(itemCode: number) {
        


        return ;



        
    }

}
