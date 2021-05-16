import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user:any;
  constructor() { }

  ngOnInit(): void {
    let data:any = localStorage.getItem('infoForm');
    this.user = JSON.parse(data).email;

  }

  Logout(){
    localStorage.removeItem('infoForm');
    this.user = false;
  }

}
