import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ViewItemService } from './view-item.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  allProduct!: Product[];
  newprod!:Product;
  updateflag=false;
  errorMessage!: string;
  sucessMessage!:string;
  save=false;
  totallength:any;
  page:number=1;
  constructor(private servc:ViewItemService,private router:Router) { }

  ngOnInit(): void {
    this.servc.getAllProducts().subscribe(res=>{this.allProduct=res;
    this.totallength=res.length});
 
  
  
  }
DeleteProduct(id:any){
this.servc.delteProduct(id).subscribe((product:any)=>this.allProduct=product);
this.servc.getAllProducts().subscribe(res=>{this.allProduct=res});
}
Updatedata(id:any){
  this.updateflag=true;
  this.newprod=<Product><unknown>((this.allProduct.find(e => e.id === id)));
  
  
}
Save(description:string,price:any){
  this.save=true;
this.newprod.Description=description;
this.newprod.Price=price;
this.servc.updatedate(this.newprod).subscribe( error => this.errorMessage = <any>error);
if(this.errorMessage==null){
this.sucessMessage="product updated sucessfully";

}
}
}
