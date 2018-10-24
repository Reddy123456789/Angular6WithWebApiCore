import { ICustomer } from './../model/customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private http: HttpClient) { }

getAllCustomers(url: string): Observable<ICustomer[]> {
  return this.http.get<ICustomer[]>('http://localhost:5000/api/customer/getAllCustomers')
    .pipe(
      catchError(this.handleError)
    );
}

// Get Customer By Id
getOneCustomer(id: number): Observable<ICustomer[]> {
  // const newurl = `${'http://localhost:5000/api/customer/getCustomer'}?id=${id}`;
  const newurl = `${'http://localhost:5000/api/customer/getCustomer'}?id=${44}`;
  console.log(newurl);
  return this.http.get<ICustomer[]>(newurl)
  .pipe(
    catchError(this.handleError)
  );
}

// insert new contact details
addCustomer(customer: ICustomer): Observable<any> {
  return this.http.post('http://localhost:5000/api/customer/addCustomer', customer, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}

// update contact details
updateCustomer(url: string, id: number, customer: ICustomer): Observable<any> {
  const newurl = `${url}?id=${id}`;
  return this.http.put(newurl, customer, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}

// delete contact information
deleteCustomer(url: string, id: number): Observable<any> {
  const newurl = `${url}?id=${id}`; // DELETE api/contact?id=42
  return this.http.delete(newurl, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}

// custom handler
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
}
}
