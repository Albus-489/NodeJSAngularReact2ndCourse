import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t4',
  templateUrl: './t4.component.html',
  styleUrls: ['./t4.component.scss']
})
export class T4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  asd = true;
  text = "Hide";
  clr = "warn"
  toggleF(){
    this.asd = !this.asd
    this.asd ? this.text = "Hide" : this.text = "Show"
    this.asd ? this.clr = "warn" : this.clr = "primary"
  }

}
