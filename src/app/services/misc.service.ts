import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Misc, Response } from "../models";
import { httpSettings } from "../utils";

const apiUrl = 'https://open-api.bser.io/v1/data/ItemMisc';

@Injectable()
export class MiscService extends httpSettings{

    public readonly _miscs = new BehaviorSubject<Misc[]>([]);

    constructor(
        private http: HttpClient,
    ) {
        super();
    }
    
    initializeMiscArray() {
        return this.http.get<Response>(apiUrl, this.httpOptions).pipe(
            map(
                res => {
                    return res.data as Array<Misc>;
                }
            ),
        );

    }

    fetchByMiscID(itemCode: number): Observable<Misc> {
        return this._miscs.pipe(
            map(x => {
                console.log(x);
                return x.find(y => y.code == itemCode);
            }),
        );
    }
}
