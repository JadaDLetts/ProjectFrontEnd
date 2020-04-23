import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseComponent } from './course/course.component';
import {CourseServiceClient} from './services/CourseServiceClient';

import {TeacherComponent} from './teacher/teacher.component';
import {TeacherServiceClient} from './services/TeacherServiceClient';

import {LessonComponent} from './lesson/Lesson.component';
import {LessonServiceClient} from './services/LessonServiceClient';

import { HomeworkComponent } from './homework/Homework.component';
import {HomeworkServiceClient} from './services/HomeworkServiceClient';
//
// import {MajorListComponent} from './MajorList/MajorList.component';
//
//
// import { NotesComponent } from './notes/Notes.component';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {UserService} from './services/UserService';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import {DepartmentComponent} from './department/department.component';
import {DepartmentServiceClient} from './services/DepartmentServiceClient';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    DepartmentComponent,
    TeacherComponent,
    // MajorListComponent,
     CourseComponent,
     LessonComponent,
     HomeworkComponent,
    // NotesComponent,
     CourseViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule
  ],
  providers: [
     DepartmentServiceClient,
     CourseServiceClient,
    TeacherServiceClient,
     LessonServiceClient,
     HomeworkServiceClient,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
