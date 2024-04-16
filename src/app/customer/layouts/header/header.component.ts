import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
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
    private cartService: CartService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.avata = sessionStorage.getItem('token');    
    if(this.avata != null){
      this.cartService.getCart().subscribe({
        next: res => {
          this.totalItemCart = res.data.length;
        }
      })  
    }
  }

  text_search: boolean = true;

  search() {
    this.text_search = !this.text_search
    document.getElementById("search_ip")?.classList.toggle("d-block");
  }

  logout(){
    this.authService.onLogout().subscribe();
    sessionStorage.removeItem("login");
  }
}
