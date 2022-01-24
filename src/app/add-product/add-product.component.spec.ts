import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddProductComponent } from './add-product.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('field validity',()=>{
let name=component.addProd.controls['Name'];
let description=component.addProd.controls['Description'];
let Price=component.addProd.controls['Price'];

expect(name.valid).toBeFalsy();
expect(description.valid).toBeFalsy();
expect(Price.valid).toBeFalsy();

name.setValue("");
expect(name.hasError('required')).toBeTruthy();

description.setValue("");
expect(description.hasError('required')).toBeTruthy();

Price.setValue("");
expect(Price.hasError('required')).toBeTruthy();
});
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
