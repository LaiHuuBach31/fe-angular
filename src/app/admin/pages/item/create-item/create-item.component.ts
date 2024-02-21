import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit{

  public errors:any;

  ngOnInit(): void {
    
  }

  constructor(private itemService: ItemService, private router: Router){}

  formData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    status: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.itemService.addItem(this.formData.value).subscribe({
      next: (res) => {
        this.router.navigate(['/admin/item/list']);
        this.Successful();
      },
      error: (err) => {
        this.errors = err.error.message;
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
      title: 'Create Item Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
