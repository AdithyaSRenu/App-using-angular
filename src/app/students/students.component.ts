import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  httpdatas;
  constructor(public userServiceObjs:UsersService) { }

  ngOnInit(): void {
    this.userServiceObjs.getUsers()
    .subscribe((students)=>{
      this.httpdatas=students;
      console.log(students)
    })
  }

}
