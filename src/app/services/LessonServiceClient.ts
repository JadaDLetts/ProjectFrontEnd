import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findAllLessons = (departmentId, teacherId, courseId) =>
    fetch(`http://localhost:8080/api/departments/${departmentId}/teachers/${teacherId}/courses/${courseId}/lessons`)
      .then(response => response.json())

  deleteLessonById = (departmentId, teacherId, courseId, lessonId) =>
    fetch(`http://localhost:8080/api/departments/${departmentId}/teachers/${teacherId}
    /courses/${courseId}/lessons/${lessonId}`,
      {method: 'delete'})
      .then(response => response.json())

}
