import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses = [];
  departmentId: 0;
  teacherId: 0;
  selectedCourse = {
    lessons: [],
    homeworks: [],
  };

  constructor(private activatedRoute: ActivatedRoute,
              private c: CourseServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourseById(departmentId, teacherId, courseId) {
    // this.d.deleteDepartmentById(department.id)
    //   .then(departments => {
    //     this.departments = departments;
    //   });
    this.courses = this.courses.filter(course => course.id !== courseId);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.departmentId = params.departmentId;
      this.teacherId = params.teacherId;
      this.c.findAllCourses(params.departmentId, params.teacherId)
        .then(courses => {
          this.courses = courses;
        });
    });
  }

}
