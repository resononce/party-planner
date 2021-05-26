import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Consumable, Response } from "../models";
import { httpSettings } from "../utils";

const apiUrl = 'https://open-api.bser.io/v1/data/ItemConsumable';

@Injectable()
export class ConsumableService extends httpSettings{

    constructor(
        private http: HttpClient,
    ) {
        super();
    }

    initializeConsumableArray() {
        return this.http.get<Response>(apiUrl, this.httpOptions).pipe(
            map(
                res => {
                    return res.data as Array<Consumable>;
                }
            )
        );
    }

}


