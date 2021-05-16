import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/service/account.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  listAcc: Account[] = [];
  user: any = '';
  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  infoForm = this.fb.group({
    "email": ["", [Validators.required, Validators.email]],
    "password": ["", [Validators.required]]
  })

  get f() {
    return this.infoForm.controls;
  }

  ngOnInit(): void {
    this.accountService.getAll().subscribe((res: any) => {
      this.listAcc = res;
    })
  }

  onSubmit() {
    console.log(this.infoForm.value);
    let check = this.checkLogin(this.infoForm.value, this.listAcc);
    if (!check) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong email or password!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    } else {
      localStorage.setItem('infoForm', JSON.stringify(check));
 
        window.location.href = 'localhost:4200';
      this.router.navigate(['/']);
    }
  }

  checkLogin(data: Account, arr: Account[]): any {
    for (let i = 0; i < arr.length; i++) {
      if (data.email == arr[i].email && data.password == arr[i].password) {
        return arr[i];
      }
    }
    return false;
  }

}
