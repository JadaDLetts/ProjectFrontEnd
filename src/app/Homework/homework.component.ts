import { Component, OnInit } from '@angular/core';
import {HomeworkServiceClient} from '../services/HomeworkServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-homework',
  templateUrl: './Homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  homeworks = [];
  lessonId: 0;
  courseId: 0;
  teacherId: 0;
  departmentId: 0;
  selectedHomework = {
    notes: []
  };

  constructor(private activatedRoute: ActivatedRoute,
              private h: HomeworkServiceClient) { }

  selectHomework(homework) {
    this.selectedHomework = homework;
  }

  deleteHomeworkById(departmentId, teacherId, courseId, lessonId, homeworkId) {
    // this.d.deleteDepartmentById(department.id)
    //   .then(departments => {
    //     this.departments = departments;
    //   });
    this.activatedRoute.params.subscribe(params => {
    this.homeworks = this.homeworks.filter(homework => homework.id !== homeworkId);
    console.log(this.homeworks); });
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.lessonId = params.lessonId;
      this.departmentId = params.departmentId;
      this.teacherId = params.teacherId;
      this.courseId = params.courseId;
      this.h.findAllHomeworks(params.departmentId, params.teacherId, params.courseId, params.lessonId)
        .then(homeworks => {
          this.homeworks = homeworks;
        });
    });
  }

}
