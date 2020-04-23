import {Injectable} from '@angular/core';

@Injectable()
export class HomeworkServiceClient {
  findAllHomeworks = (departmentId, teacherId, courseId, lessonId) =>
    fetch(`http://localhost:8080/api/departments/${departmentId}/teachers/${teacherId}/courses/${courseId}/lessons/${lessonId}/homeworks`)
      .then(response => response.json())
}
