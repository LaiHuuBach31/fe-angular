import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  public id:any;
  public product:any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];    
      this.productService.getProductId(this.id).subscribe(
        res =>{
          console.log(res.data);
          
          this.product = res.data;
        }
      )
  }

}
