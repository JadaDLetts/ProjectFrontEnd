import {Injectable} from '@angular/core';

@Injectable()
export class DepartmentServiceClient {

  deleteDepartmentById = (departmentId) =>
    fetch(`http://localhost:8080/api/departments/${departmentId}`,
{method: 'delete'}).then(response => response.json())

  findAllDepartments = () =>
    fetch('http://localhost:8080/api/departments')
      .then(response => response.json())

}
