import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: Product = new Product();

  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.findId(this.router.snapshot.params.id).subscribe((res) =>{
      this.product = res;
      console.log(res);
    })
  }



}
