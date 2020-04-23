import { Component, OnInit } from '@angular/core';
import {DepartmentServiceClient} from '../services/DepartmentServiceClient';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments = [];
  selectedDepartment = {
    // students: [],
    teachers: [],
    courses: [],
    lessons: [],
    homeworks: [],
  };


  constructor(private d: DepartmentServiceClient) {
  }

  ngOnInit() {
    this.d.findAllDepartments()
      .then(departments => {
        this.departments = departments;
      });
  }

  deleteDepartment = (department) =>
    // this.d.deleteDepartmentById(department.id)
    //   .then(departments => {
    //     this.departments = departments;
    //   });
   this.d.deleteDepartmentById(department.id).then(departments => {
     this.departments = departments;
    })




  selectDepartment(department) {
    this.selectedDepartment = department;
  }

  createDepartment() {

  }
}
