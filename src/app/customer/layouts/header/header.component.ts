import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  avata: any;
  totalItemCart:any;

  constructor(
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.avata = sessionStorage.getItem('login');
    this.cartService.getCart().subscribe({
      next: res => {
        console.log(res);
        
        this.totalItemCart = res.data;
      }
    })
  }

  text_search: boolean = true;

  search() {
    this.text_search = !this.text_search
    document.getElementById("search_ip")?.classList.toggle("d-block");
  }
}
