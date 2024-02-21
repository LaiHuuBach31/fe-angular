import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   text_search :boolean  = true;
  search(){
    this.text_search = !this.text_search
    document.getElementById("search_ip")?.classList.toggle("d-block");
  }
}
