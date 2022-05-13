import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.scss']
})
export class T1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.countries.sort();
  }

  countries = ['Norway', 'Japan', 'Korea', 'Iceland', 'Estonia'];
  currentCountry: any;
  inpNum:any;

  addCountry() {
    if (this.currentCountry){
      this.countries.push(this.currentCountry);
      console.log('Sort arr', this.countries.sort());
      this.currentCountry = '';
    }
    else alert
      ('Поле порожнє!');
  }

  remCountry() {
    this.countries.splice(this.inpNum - 1, 1);
    this.inpNum = '';
  }
}
