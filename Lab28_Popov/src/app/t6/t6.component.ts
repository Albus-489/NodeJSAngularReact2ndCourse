import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t6',
  templateUrl: './t6.component.html',
  styleUrls: ['./t6.component.scss']
})
export class T6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.total = this.numArr.length
  }

  total = 0;

  numArr = [4,8,9];
  inpNum:any;

  addNum(){
   this.numArr.push(this.inpNum);
   this.inpNum = '';
   this.total = this.numArr.length
  }

}
