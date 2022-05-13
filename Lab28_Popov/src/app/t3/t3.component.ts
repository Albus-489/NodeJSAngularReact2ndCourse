import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styleUrls: ['./t3.component.scss']
})
export class T3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.countriesLegacy = this.countriesOrigin.filter(function(c) {
      return c.includes('p');
    })
    console.log(this.countriesLegacy);
  }

  countriesOrigin2 = ['Norway', 'Japan', 'Korea', 'Iceland', 'Estonia'];
  countriesOrigin = this.countriesOrigin2;
  countriesLegacy:any;

  switchArr(st:any){

    if(st.target.checked === true){
      this.countriesOrigin = this.countriesLegacy
    }
    else{
      this.countriesOrigin = this.countriesOrigin2
    }
  }
}
