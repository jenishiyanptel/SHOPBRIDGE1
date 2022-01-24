import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from '../product';

import { ViewItemService } from './view-item.service';

describe('ViewItemService', () => {
  let service: ViewItemService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ViewItemService);
    httpTestingController = TestBed.get(HttpTestingController);

  });
  
  it('#getAllProducts should return the expected data',(done)=>{
    const expectedData: Product[] = [
      { 'id': 'id1' ,'Name': 'name1','Description': 'description1','Price':'proce1'}
    ];
    service.getAllProducts().subscribe(data=>{
      expect(data).toEqual(expectedData);
      done();
    });
    const testRequest=httpTestingController.expectOne('http://localhost:3000/products');
    testRequest.flush(expectedData);
  });
 
  it('#getAllProducts should use GET to retrive the data',()=>{
    service.getAllProducts().subscribe();
    const testurl=httpTestingController.expectOne('http://localhost:3000/products');
    expect(testurl.request.method).toEqual('GET');
  });

  it('Get should return empty object on error',()=>{
const expecteddata:Product[]=[];
service.getAllProducts().subscribe(data=>{
  expect(data).toEqual(expecteddata)
});
const testurl=httpTestingController.expectOne('http://localhost:3000/products');
testurl.flush('error',{status:500,statusText: 'Broken Service'});
  });


  it('should call getProducts and return the appropriate data',()=>{
    const id=1;
    const expectedData: Product[] = [
      { 'id': 'id1' ,'Name': 'name1','Description': 'description1','Price':'proce1'}
    ];
    service.getProducts(id).subscribe(data=>{
      expect(data).toEqual(expectedData)
    });
    const testRequest=httpTestingController.expectOne(`http://localhost:3000/products/${id}`);
    testRequest.flush(expectedData);
  })

  it('should call the update and return the updated book from API',()=>{
    const updatedata:Product = {'id': 'id1' ,'Name': 'name1','Description': 'description1','Price':'proce1'};
    service.updatedate(updatedata).subscribe(data=>{
      expect(data).toEqual(updatedata);
    });
    const testRequest=httpTestingController.expectOne(`http://localhost:3000/products/${updatedata.id}`);
    testRequest.flush(updatedata);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
