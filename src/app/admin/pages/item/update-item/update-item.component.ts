import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit{

  errors:any;
  id:any;

  ngOnInit(): void {
    this.id = this.routers.snapshot.params['id'];
    this.itemService.getItemId(this.id).subscribe(res=>{
      this.formData.patchValue(res.data);
    })
  }

  constructor(private itemService: ItemService, private router: Router, private routers: ActivatedRoute){}

  formData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    status: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.itemService.updateItem(this.id, this.formData.value).subscribe({ 
      next: (res) => {
        this.router.navigate(['/admin/item/list']);
        this.Successful();
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  get f(): any {
    return this.formData.controls;
  }

  Successful() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Create item Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
