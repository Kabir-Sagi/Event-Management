import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private _httpClient:HttpClient) { }

  // get all free events
  public getFreeEvents():Observable<any>{
    let dataURL = `http://127.0.0.1:3000/api/events`;
    return this._httpClient.get<any>(dataURL).pipe(
      retry(1)
    );
  }

  // get all pro events
  public getProEvents():Observable<any>{
    let dataURL = `http://127.0.0.1:3000/api/pro-events`;
    return this._httpClient.get<any>(dataURL).pipe(
      retry(1)
    );
  }

  // upload the events
  public uploadEvents(event):Observable<any>{
    let dataURL = `http://127.0.0.1:3000/api/upload`;
    return this._httpClient.post<any>(dataURL,event).pipe(
      retry(1)
    );
  }
}
