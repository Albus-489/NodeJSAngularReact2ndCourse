import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t5',
  templateUrl: './t5.component.html',
  styleUrls: ['./t5.component.scss']
})
export class T5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  boolArr = [true, true, true, true, true];

  toggleF(num:any){
    this.boolArr[num] = !this.boolArr[num]
  }

}
