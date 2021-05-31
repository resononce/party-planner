import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ItemLocation, Response } from "../models";
import { httpSettings } from "../utils";

const apiUrl = 'https://open-api.bser.io/v1/data/ItemSpawn';

@Injectable()
export class LocationService extends httpSettings{

    constructor(
        private http: HttpClient,
    ) {
        super();
    }

    initializeLocationArray(): Observable<ItemLocation[]> {
        return this.http.get<Response>(apiUrl, this.httpOptions).pipe(
            map(
                res => {
                    return res.data as ItemLocation[];
                }
            )
        );
    }

    mapLocationArray() {
        this.initializeLocationArray().pipe(
            map(data => {
                
            })
        )
    }

}


