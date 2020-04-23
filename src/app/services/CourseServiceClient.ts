import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findCourseById = (departmentId, teacherId, courseId) =>
    fetch(`http://localhost:8080/api/departments/${departmentId}/teachers/${teacherId}/courses/${courseId}`)
      .then(response => response.json())

  findAllCourses = (departmentId, teacherId) =>
    fetch(`http://localhost:8080/api/departments/${departmentId}/teachers/ ${teacherId}/courses`)
    .then(response => response.json())
}
