import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit{

  public items: any = [];
  public error :any;
  

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItem();
  }

  public getItem() {
    this.itemService.getItem().subscribe(
      (res: any) => {
        this.items = res.data.content;
      }
    );
  }

  delete(id:number){
    if(confirm("Are you sure to delete it?")){
      this.itemService.deleteItem(id).subscribe({
        next: res => {
          this.getItem();
          this.deleteSuccessful();
      },error:  err => {
        this.error = err.error.message; 
      }})
    }
  }

  deleteSuccessful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Delete Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }


}
