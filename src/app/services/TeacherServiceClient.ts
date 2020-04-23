import {Injectable} from '@angular/core';

@Injectable()
export class TeacherServiceClient {
  findAllTeachers = (departmentId) =>
    fetch(`http://localhost:8080/api/departments/${departmentId}/teachers`)
      .then(response => response.json())


deleteTeacherById = (departmentId, teacherId) =>
  fetch(`http://localhost:8080/api/departments/${departmentId}/teachers/${teacherId}`,
    {method: 'delete'})
    .then(response => response.json())
}
