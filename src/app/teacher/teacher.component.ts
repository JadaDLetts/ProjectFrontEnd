import { Component, OnInit } from '@angular/core';
import {TeacherServiceClient} from '../services/TeacherServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers = [];
  departmentId: 0;
  selectedTeacher = {
    courses: [],
    lessons: [],
    homeworks: [],
  };

  constructor(private activatedRoute: ActivatedRoute,
              private t: TeacherServiceClient) { }

  selectTeacher(teacher) {
    this.selectedTeacher = teacher;
  }

  deleteTeacherById(departmentId, teacherId) {
    // this.d.deleteDepartmentById(department.id)
    //   .then(departments => {
    //     this.departments = departments;
    //   });
    this.teachers = this.teachers.filter(teacher => teacher.id !== teacherId);
  }

  ngOnInit() {
    // from the params get deptId
    // if deptId is not null, assign this,.deptId = params.deptId else 0
    // call ur api with this.deptId
    // this.activatedRoute.params.subscribe(params => {
    //   if (params.departmentId) {
    //     this.departmentId = params.departmentId;
    //   } else {
    //     this.departmentId = 0;
    //   }
    //   this.t.findAllTeachers(this.departmentId).then(teachers => {
    //     this.teachers = teachers;
    //   });
    // });

    this.activatedRoute.params.subscribe(params => {
      this.departmentId = params.departmentId;
      this.t.findAllTeachers(params.departmentId)
      .then(teachers => {
        this.teachers = teachers;
      });
    });
  }
}
