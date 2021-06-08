import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { concatAll, map, mergeAll, tap } from 'rxjs/operators';
import { ItemLocation, Response } from "../models";
import { httpSettings } from "../utils";

const apiUrl = 'https://open-api.bser.io/v1/data/ItemSpawn';
const staticJSON = 'assets/EnglishMaterial.json'


@Injectable()
export class LocationService extends httpSettings {

    constructor(
        private http: HttpClient,
    ) {
        super();
    }

    initializeLocationArray(): Observable<Array<ItemLocation>> {
        return this.http.get<Response>(staticJSON, this.httpOptions).pipe(
            map(
                res => {
                    return res.data as ItemLocation[];
                }
            )
        );
    }

    formatLocationArray(): Observable<ItemLocation[][]> {
        return this.initializeLocationArray().pipe(
            map(data => {
                return [
                    data.filter(value => value.areaCode == 1),
                    data.filter(value => value.areaCode == 2),
                    data.filter(value => value.areaCode == 3),
                    data.filter(value => value.areaCode == 4),
                    data.filter(value => value.areaCode == 5),
                    data.filter(value => value.areaCode == 6),
                    data.filter(value => value.areaCode == 7),
                    data.filter(value => value.areaCode == 8),
                    data.filter(value => value.areaCode == 9),
                    data.filter(value => value.areaCode == 10),
                    data.filter(value => value.areaCode == 11),
                    data.filter(value => value.areaCode == 12),
                    data.filter(value => value.areaCode == 13),
                    data.filter(value => value.areaCode == 14),
                    data.filter(value => value.areaCode == 15)]
            })
        )
    }
}


