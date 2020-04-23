import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'login', pathMatch: 'full',  component: LoginComponent},
  {path: 'profile', pathMatch: 'full',  component: ProfileComponent},
  {path: 'departments',  pathMatch: 'full',  component: CourseViewerComponent},
  {path: 'departments/:departmentId', pathMatch: 'full',  component: CourseViewerComponent},
  {path: 'departments/:departmentId/teachers', pathMatch: 'full',  component: CourseViewerComponent},
  {path: 'departments/:departmentId/teachers/:teacherId', pathMatch: 'full',  component: CourseViewerComponent},
  {path: 'departments/:departmentId/teachers/:teacherId/courses/:courseId', pathMatch: 'full',  component: CourseViewerComponent},
  {path: 'departments/:departmentId/teachers/:teacherId/courses/:courseId/lessons', pathMatch: 'full',  component: CourseViewerComponent},
  // tslint:disable-next-line:max-line-length
  {path: 'departments/:departmentId/teachers/:teacherId/courses/:courseId/lessons/:lessonId', pathMatch: 'full',  component: CourseViewerComponent},
  // tslint:disable-next-line:max-line-length
  {path: 'departments/:departmentId/teachers/:teacherId/courses/:courseId/lessons/:lessonId/homeworks/', pathMatch: 'full',  component: CourseViewerComponent},
  // tslint:disable-next-line:max-line-length
  {path: 'departments/:departmentId/teachers/:teacherId/courses/:courseId/lessons/:lessonId/homeworks/:homeworkId', component: CourseViewerComponent}

  // {path: 'lessons/:lessonId/homeworks/', component: LessonComponent},
  // {path: 'lessons/:lessonId/homeworks/:homeworkId', component: LessonComponent}

  // {path: 'courses', component: DepartmentComponent},
  // {path: 'courses/:courseId', component: DepartmentComponent},
  // {path: 'courses/:courseId/lessons/:lessonId', component: DepartmentComponent},
  // {path: 'courses/:courseId/lessons/:lessonId/homeworks/:homeworkId', component: DepartmentComponent},
  //
  // {path: 'courses/:courseId/lessons/:lessonId/homeworks/:homeworkId/notes', component: DepartmentComponent},
  // {path: 'courses/:courseId/lessons/:lessonId/homeworks/:homeworkId/notes/:noteId', component: DepartmentComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
