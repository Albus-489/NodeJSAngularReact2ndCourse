import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t7',
  templateUrl: './t7.component.html',
  styleUrls: ['./t7.component.scss']
})
export class T7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses = {
    'html': true,
    'css': true,
    'php': false,
    'js': true,
    'angular': false,
  };
}
