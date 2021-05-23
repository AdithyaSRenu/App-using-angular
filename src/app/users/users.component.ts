import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  httpdatas;
  constructor(public userServiceObj:UsersService) { }

  ngOnInit(): void {
    this.userServiceObj.getUsers()
    .subscribe((students)=>{
      this.httpdatas=students;
      console.log(students)
    })
  }

}
