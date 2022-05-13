import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styleUrls: ['./t2.component.scss']
})
export class T2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ourNum:any;
  plusNum:any;

  numPlus(){
    this.plusNum = this.ourNum * this.ourNum;
  }

}
