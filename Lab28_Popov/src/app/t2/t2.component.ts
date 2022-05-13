import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styleUrls: ['./t2.component.scss']
})
export class T2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countries = ['Norway', 'Japan', 'Korea', 'Iceland', 'Estonia'];
  currentCountry: any;
  inpNum:any;

  addCountry() {
    if (this.currentCountry) {
      this.countries.push(this.currentCountry);
      console.log('Sort arr', this.countries.sort());
      this.currentCountry = '';
    }
    else alert
      ('Поле порожнє!');
  }

  remCountry() {

    this.inpNum = this.inpNum.toUpperCase();
    let a = this.countries.map(c => c.toUpperCase());
    let b = this.countries.map(c => c.includes('p'));
    console.log(b);

    if (a.includes(this.inpNum)) {
      let ind = a.indexOf(this.inpNum);
      this.countries.splice(ind, 1);
      this.inpNum = '';
    }
    else{
      alert('Немає співпадінь');
      this.inpNum = '';
    }

  }
}
