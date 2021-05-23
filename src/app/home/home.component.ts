import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  title = 'FirstApp';
  isavailable = false;
  name = "Your Name";
  months = ["January","february","March","April","May","June","July","August","September","October","November","December"];
  buttonClicked(){
    alert("Clicked");
  }
  value="";
  keyUpDemo(event){
    this.value = event.target.value;
    console.log(this.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
