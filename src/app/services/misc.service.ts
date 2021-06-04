import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Misc, Response } from "../models";
import { httpSettings } from "../utils";

const apiUrl = 'https://open-api.bser.io/v1/data/ItemMisc';
const staticJSON = 'assets/ItemMisc.json';

@Injectable()
export class MiscService extends httpSettings{

    constructor(
        private http: HttpClient,
    ) {
        super();
    }
    
    initializeMiscArray() {
        return this.http.get<Response>(staticJSON, this.httpOptions).pipe(
            map(
                res => {
                    return res.data as Array<Misc>;
                }
            ),
        );

    }
    
}
