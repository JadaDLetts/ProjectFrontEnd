import { Component, OnInit } from '@angular/core';
import {DepartmentServiceClient} from '../services/DepartmentServiceClient';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments = [];
   department = {
     id: 0,
     department_name: '',
  //   number: 0,
     teachers: [],
     courses: [],
     lessons: [],
     homeworks: [],
   };
  selectedDepartment = {
    // students: [],
    teachers: [],
    courses: [],
    lessons: [],
    homeworks: [],
  };


  constructor(private service: DepartmentServiceClient) {
  }

  ngOnInit() {
    this.service.findAllDepartments()
      .then(departments => {
        this.departments = departments;
      });
  }

  deleteDepartmentById = (departmentId) =>
    // this.d.deleteDepartmentById(department.id)
    //   .then(departments => {
    //     this.departments = departments;
    //   });
   // this.d.deleteDepartmentById(department.id).then(departments => {
   //   this.departments = departments;
   //  })
  this.service.deleteDepartmentById(departmentId)


  selectDepartment(department) {
    this.selectedDepartment = department;
  }


  createDepartment() {
    this.department.department_name = 'new dep'.toString();
    this.department.id = this.departments.length;
    this.departments.push(this.department);
  }
}
