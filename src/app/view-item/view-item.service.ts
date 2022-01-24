import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ViewItemService {
  
  constructor(private http:HttpClient) { }
  cartURL="http://localhost:3000/products" ;
  getAllProducts(): Observable<Product[]> {
    //make a GET call to "http://localhost:3000/products" 
    let i;
    i= this.http.get<Product[]>("http://localhost:3000/products");
    
    return i;
  }
  delteProduct(id:any):Observable<any>{
    const url = `${this.cartURL}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  getProducts(id:any): Observable<Product[]> {
    //make a GET call to "http://localhost:3000/products" 
    let i;
    const url = `${this.cartURL}/${id}`;
    i= this.http.get<Product[]>(url);
   
    return i;
  }
  updatedate(product1: Product): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.cartURL}/${product1.id}`;
    return this.http.put<any>(url, product1, { headers: options }).pipe(
      tap((_: any) => console.log(`updated hero id=${product1.id}`)),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(errMsg);
  }
}
