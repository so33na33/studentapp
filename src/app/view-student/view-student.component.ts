import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 data=[
  {"name":"Suresh","age":50,"Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvm23oH1Te7VMVabnGjl2BbwdM_M_iIiwPQ&usqp=CAU"},
  {"name":"Reji","age":45,"Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8VVuDg3e3YqGVRudKlJXAQ7mm1wzgW5OVw&usqp=CAU"},
  {"name":"Sam","age":28,"Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-V2u5Lj7VGP3jPqECf7gJjJuTHgBNUbx0g&usqp=CAU"},
  {"name":"Soumya","age":22,"Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTjHOCWWdu_PhEoiAWJeEMZ2lecPS8WksQw&usqp=CAU"},
  {"name":"Remya","age":15,"Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGB4L9NaV1EMUGwRwg4y7pEVnyzjuSykDKIg&usqp=CAU"}
 ]
}
