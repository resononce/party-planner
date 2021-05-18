import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Misc, Response } from "../models";
import { httpSettings } from "../utils";

const apiUrl = 'https://open-api.bser.io/v1/data/ItemMisc';

@Injectable()
export class MiscService extends httpSettings{

    constructor(
        private http: HttpClient,
    ) {
        super();
    }
    

    getAllMisc(): Observable<Array<Misc>> {
        return this.http.get<Response>(apiUrl, this.httpOptions).pipe(
            map(
                res => {
                    return res.data as Array<Misc>;
                }
            ),
        );
    }

    getWMiscById(itemCode: number): Observable<Misc> {
        return this.getAllMisc().pipe(
            map(x => x.find(y => y.code == itemCode)),
        ); 
    }

}
