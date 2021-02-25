import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

//Constantes
const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  // funcion generica que ejecuta un get
  get<T>( query: string ){
    query = apiURL + query;
    return this.http.get<T>( query);
  }

  // funcion generica que ejecuta un post
  post<T>( query: string, data: any ) {
    query = apiURL + query;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post<T>(query, JSON.stringify(data), httpOptions);
  }

  // funcion genreica que ejecuta un PUT
  put<T>( query: string, data: HttpParams ) {
    query = apiURL + query;
    return this.http.put<T>( query, data );
  }

}
