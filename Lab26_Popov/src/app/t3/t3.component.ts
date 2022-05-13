import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styleUrls: ['./t3.component.scss']
})
export class T3Component {
  arrnums = [10, 20, 30, 40, 50]

  rev =()=>{
    this.arrnums.reverse()
  }
}

