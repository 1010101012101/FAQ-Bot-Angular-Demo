import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export class Name {
    name: string;
    email: string;
}

@Injectable()
export class ChatBotService {
    constructor(
        private httpClient: HttpClient
    ) { }
    post(data): Observable<any> {
        // tslint:disable-next-line:max-line-length
        const url = 'https://hackathon-chat-bot.azurewebsites.net/qnamaker/knowledgebases/8fefbcbf-1428-4cde-928d-cd4e63f0388d/generateAnswer';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'EndpointKey 82a22ca1-af08-413d-aa2a-8efbaf66ea4e'
        });
        const options = { headers: headers };
        return this.httpClient.post(url, data, options)
            .pipe(
                map(res => res),
                catchError(err => err)
            );
    }
}
