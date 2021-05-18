import {HttpHeaders} from "@angular/common/http";


export class httpSettings {
    apiKey = 'kw4EJ6mGnDan79JbBZsJx5RJYfQcQLXc8XM2Aqej';
    httpHeader = {
    'x-api-key': this.apiKey, 
    };
    httpOptions = {
    headers: new HttpHeaders(this.httpHeader),
    };
}