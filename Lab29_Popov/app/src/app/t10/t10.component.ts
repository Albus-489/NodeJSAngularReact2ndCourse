import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t10',
  templateUrl: './t10.component.html',
  styleUrls: ['./t10.component.scss']
})
export class T10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myarr = [
    {name: 'Україна', cities: ['Київ', 'Тернопіль', 'Львів', 'Чернівці']},
    {name: 'Японія', cities:  ['Токіо', 'Хокайдо', 'Сайтама', 'Нагасакі']}
  ];

  ind:number = 0;
  arr = this.myarr[this.ind].cities;

  fillArr(e:any){
    console.log(e);

    this.arr = this.myarr[e].cities
  }

}
