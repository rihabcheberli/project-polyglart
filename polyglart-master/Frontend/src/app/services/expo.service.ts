import { Injectable } from '@angular/core';
import { map , catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import {Observable} from 'rxjs';
import {Expo} from '../shared/expo';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ExpoService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getexpos(): Observable<Expo[]> {
    return this.http.get<Expo[]>(baseURL + 'expos')
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getexpo(id: string): Observable<Expo> {
    return this.http.get<Expo>(baseURL + 'expos/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getexposIds(): Observable<number[] | any> {
    return this.getexpos().pipe(map(expos => expos.map(expo => expo.id)))
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  putexpo(expo: Expo): Observable<Expo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Expo>(baseURL + 'expos/' , expo, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
}
