import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t9',
  templateUrl: './t9.component.html',
  styleUrls: ['./t9.component.scss']
})
export class T9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value = '';

  arr = [
    'Японія', 'Південна Корея', 'Італія', 'Австралія', 'Ісландія'
  ]

  asd(e:any){
    console.log(e);
    this.value = e.value
  }

}
