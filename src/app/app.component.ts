import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  startDate = new Date('2021/08/09');
  title = COURSES[0].description;
  price = 9.87;
  rate = 0.76;
  course = COURSES[0];

  OnCourseSelected(course:Course){
    console.log("App component",course);
  }

}
