import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/service/account.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb: FormBuilder, private accountService: AccountService) { }

  infoForm = this.fb.group({
    "name": ["", [Validators.required]],
    "email": ["", [Validators.required, Validators.email]],
    "password": ["", [Validators.required]]
  })

  get f(){
    return this.infoForm.controls;
  }

  ngOnInit(): void { 
  }
  onSubmit(){
    this.accountService.create(this.infoForm.value).subscribe((res)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Sign up successfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
    // console.log(this.infoForm.value)
  }
}
