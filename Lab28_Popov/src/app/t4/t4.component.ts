import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-t4',
  templateUrl: './t4.component.html',
  styleUrls: ['./t4.component.scss']
})
export class T4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allInp: string = "";
  numArr: string[] = [];
  ulBoolArr = [
    {n: '1', st:false},
    {n: '2', st:false},
    {n: '3', st:false},
    {n: '4', st:false},
    {n: '5', st:false}
  ]

  filterArr(){
    this.numArr = this.allInp.split(',').filter(Number);
    this.ulBoolArr.forEach(item =>{ this.numArr.includes(item.n) ? item.st = true : item.st = false })
  }

}
