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

  isActive = true;
  cl = false;
  cr = false;

  clr(e:any){
    this.cl = e.checked;
    console.log(e);

  }

  cross(e:any){
    this.cr = e.checked;
  }

}
