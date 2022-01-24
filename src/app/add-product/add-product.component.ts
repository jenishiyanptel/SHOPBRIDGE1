import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { AddserviceService } from './addservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  errorMessage: any;
  sucessMessage:any="";
  constructor(private addservc:AddserviceService,private formBuilder: FormBuilder) {
    
   }
  newProduct!:Product[];
  addProd!: FormGroup;

  ngOnInit(): void {
    
    this.addProd=this.formBuilder.group({
      Name:['',Validators.required],
      Description:['',Validators.required],
      Price:['',Validators.required]
    })
  }
addProduct(){
  // this.addservc.AddProduct().subscribe()
  
  this.newProduct=this.addProd.value;
  this.addservc.AddProduct(this.newProduct).subscribe( error => this.errorMessage = <any>error);
  
  this.addProd.reset();
  
}
}
