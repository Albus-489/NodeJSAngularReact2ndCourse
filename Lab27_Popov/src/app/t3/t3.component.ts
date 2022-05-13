import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styleUrls: ['./t3.component.scss']
})
export class T3Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  countries = ['Норвегія', 'Японія', 'Корея', 'Ісландія', 'Естонія'];
  currentCountry: any;

  addCountry(){
    this.countries.push(this.currentCountry);
  }

}
