import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Product } from '../product';


import { AddserviceService } from './addservice.service';

describe('AddserviceService', () => {
  let service: AddserviceService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(AddserviceService);
  });
  const returnedData: Product[] = [
    { 'id': 'id1' ,'Name': 'name1','Description': 'description1','Price':'proce1'}
  ];

  it('#AddProduct should use POST to add the data', () => {
    service.AddProduct(returnedData).subscribe();
 
    const testRequest = httpTestingController.expectOne('http://localhost:3000/products');
 
    expect(testRequest.request.method).toEqual('POST');
  });


it('should add an product for AddProduct',()=>{
  const returnedData: Product[] = [
    { 'id': 'id1' ,'Name': 'name1','Description': 'description1','Price':'proce1'}
  ];
  service.AddProduct(returnedData).subscribe(data=>{
    expect(data).toEqual(returnedData);
  });
  const testRequest = httpTestingController.expectOne('http://localhost:3000/products');
  const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: returnedData });
  testRequest.event(expectedResponse);
});


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
function done() {
  throw new Error('Function not implemented.');
}

