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

  nameTop = ['Gregory', 'Bavr', 'Altair'];
  nameBottom = ['Susan', 'Alex', 'Mary'];

  moveName(){
    if(this.nameBottom.length > 0){
      let a = this.nameBottom[0];
      this.nameTop.push(a);
      this.nameBottom.shift();
    }
  }

}
