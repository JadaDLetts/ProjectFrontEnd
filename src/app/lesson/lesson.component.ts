import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lessons = [];
  courseId: 0;
  departmentId: 0;
  teacherId: 0;
  selectedLesson = {
    homeworks: []
  };

  constructor(private activatedRoute: ActivatedRoute,
              private l: LessonServiceClient) { }
  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }

  deleteLessonById(departmentId, teacherId, courseId, lessonId) {
    this.l.deleteLessonById(departmentId, teacherId, courseId, lessonId).
    then(lessons => this.lessons = lessons);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.departmentId = params.departmentId;
      this.teacherId = params.teacherId;
      this.courseId = params.courseId;
      this.l.findAllLessons(params.departmentId, params.teacherId, params.courseId)
        .then(lessons => this.lessons = lessons);
    });
  }

}
