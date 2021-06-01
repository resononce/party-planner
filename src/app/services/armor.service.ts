import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Armor, Response } from "../models";
import { httpSettings } from "../utils";

const apiUrl = 'https://open-api.bser.io/v1/data/ItemArmor';
const staticJSON = 'assets/ItemArmor.json';

@Injectable()
export class ArmorService extends httpSettings{
    constructor(
        private http: HttpClient,
    ) {
        super();
    }

    initializeArmorArray(): Observable<Armor[]> {
        return this.http.get<Response>(staticJSON, this.httpOptions).pipe(
            map(
                res => {
                    return res.data as Array<Armor>;
                }
            ),
        );
    }

}