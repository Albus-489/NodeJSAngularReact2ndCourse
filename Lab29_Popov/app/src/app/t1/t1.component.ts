import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.scss']
})
export class T1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  boxSt = true;
  box(e:any){
    console.log(e.checked);
    this.boxSt = e.checked
  }

}
