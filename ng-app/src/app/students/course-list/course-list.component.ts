import {Component, Input, OnInit} from "@angular/core";
import {Course} from "../course";

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls:['./course-list.component.css']
})
export class CouresListComponent implements OnInit {
  constructor() {
  }
  @Input() count:number;
  @Input('enrolledCourse') courses:Course;
  ngOnInit(){

  }
}
