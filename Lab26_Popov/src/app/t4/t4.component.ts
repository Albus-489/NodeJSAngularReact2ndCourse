import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t4',
  templateUrl: './t4.component.html',
  styleUrls: ['./t4.component.scss']
})
export class T4Component {
  arrnums = [3, 2, 5, 1, 4]

  rev = () => {
    this.arrnums.sort()
  }
}