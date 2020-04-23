import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  universities = [];
  teachers = [];
  courses = [];
   lessons = [];
  // homeworks = [];
  // notes = [];
  // widgets = [];

  constructor() { }

  ngOnInit() {

  }

}
