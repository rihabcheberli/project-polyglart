import { Injectable } from '@angular/core';
import { map , catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import {Observable} from 'rxjs';
import {expo} from '../shared/expo';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class expoService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getexpos(): Observable<expo[]> {
    return this.http.get<expo[]>(baseURL + 'expos')
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getexpo(id: string): Observable<expo> {
    return this.http.get<expo>(baseURL + 'expos/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getexposIds(): Observable<number[] | any> {
    return this.getexpos().pipe(map(expos => expos.map(expo => expo.id)))
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  putexpo(expo: expo): Observable<expo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<expo>(baseURL + 'expos/' , expo, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
}
