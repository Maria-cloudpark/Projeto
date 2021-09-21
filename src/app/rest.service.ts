import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';

const endpoint = 'https://763.cloudpark.com.br/';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) {}
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Backend returned code ${error.status}, ' +
        'body was: ${error.error}');
    }
    return throwError(
      'Something bad happened; please try again later.');
  }



  getmovimentos(): Observable<any> {
    const head= new HttpHeaders().append('Authorization', 'Token 6bac15b2006579c957d0a70f366e440cd5163272');
    let param = head.get('Authorization');
    console.log(param);
    return this.http.get<movimento>(endpoint + 'api/v1/operational/vehicles?page=1&search=', {headers: head}).pipe(
      catchError(this.handleError)
    );
  }

  getmovimento(id: number): Observable<any> {
    const head= new HttpHeaders().append('Authorization', 'Token 6bac15b2006579c957d0a70f366e440cd5163272');
    let param = head.get('Authorization');
    console.log(param);
    return this.http.get<movimento[]>(endpoint + 'api/v1/operational/vehicles?page=1&search=' + id, {headers: head}).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  getclient_results(): Observable<any> {
    const head = new HttpHeaders(). append('Authorization', 'Token 6bac15b2006579c957d0a70f366e440cd5163272');
    let param = head.get('Authorization');
    console.log(param);
    return this.http.get<client_results[]>(endpoint + 'api/v1/customer/customer/list?page=0', {headers: head}).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  getplan_results(): Observable<any> {
    const head = new HttpHeaders(). append('Authorization', 'Token 6bac15b2006579c957d0a70f366e440cd5163272');
    let param = head.get('Authorization');
    console.log(param);
    return this.http.get<plan_results[]>(endpoint + 'api/v1/customer/customerplan/list?page=0', {headers: head}).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  getcontract_results(): Observable<any>{
    const head = new HttpHeaders(). append('Authorization', 'Token 6bac15b2006579c957d0a70f366e440cd5163272');
    let param = head.get('Autorization');
    console.log(param);
    return this.http.get<contract_results[]>(endpoint + 'api/v1/operational/contract/list?page=0', {headers: head}).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }
  getdetail(idAtual: any): Observable<any>{
    const head = new HttpHeaders(). append('Authorization', 'Token 6bac15b2006579c957d0a70f366e440cd5163272');
    let param = head.get('Autorization');
    console.log(param);
    return this.http.get<detail>(endpoint + 'api/v1/customer/customersave/' + idAtual, {headers: head}).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }
}

export interface vehicle {
  vehicle: {
    description: string;
    customer: {
      id: number;
      name: string;
      apartment: number;
    }
  }
}

export interface movimento {
  id: number;
  ticket_id: number;
  entry_date: DatePipe;
  plate: string;
  vehicle: vehicle;
}

export interface client_results {
  id: number;
  name: string;
  plan_name: string;
  due_date: Date;
}


export interface plan_results {
  id: number,
  name: string,
  kind_desc: string,
  value: number,
  use_time_bands: string,
  visible_in_operation: string,
  places_count: number,
  order_in_screen: number,
}

export interface contract_results{
  id: number,
  name: string,
  kind_desc: string,
  vehicle_kind_desc: string,
  visible_in_operation: string,
  order_in_screen: number,
}

export interface vehicle_set{
  id: number,
  plate: string,
  description: string,
  customer: number,
  card_id: number,
  customer_desc: string,
}

export interface address{
  id: number,
  cep: number,
  uf: string,
  city: string,
  neighborhood: string,
  adsress: string,
  ibge_city_code: string,
}

export interface detail{
  id: number,
  name: string,
  blocked: boolean,
  blocked_reason: string,
  vehicle_set: vehicle_set,
  cpf: number,
  phone: number,
  email: string,
  is_hourly: boolean,
  apartment: number,
  cnh_number: number,
  id_number: number,
  address: address,
  due_date: string,
  access_count: number,
  plan_id: string,
  plan_name: string,
  plan_kind: string,
  latest_plan_transaction_id: string,
  expiry_date: number,
  insurance_expiration: string,
  prepaid_balance: number,
  places_count: number,
  pending_daily_count: number
}