import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


const API_URL = 'http://localhost:2222';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: HttpClient, public router: Router) { }

  public createRequirementFn(params: any): Observable<any> 
  {
          return this.http.post(API_URL + '/addRequirements', params).pipe(map(res => res));
      }
 
  public getRequirementFn(): Observable<any> {
    
       return this.http.get(API_URL + '/getAllDetails').pipe(map(res => res));
  }

  
  public editRequirementFn(id: any): Observable<any> {
        return this.http.get(API_URL + '/updateRequirementsById/' +id).pipe(map(res => res));
    }

   public getLocationsFn():Observable<any>{
    return this.http.get(API_URL + '/getAllLocations').pipe(map(res=>res));
   }

   public getEgoFn():Observable<any>{
    return this.http.get(API_URL + '/getAllEgo').pipe(map(res=>res));
   }

}
