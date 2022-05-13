import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t6',
  templateUrl: './t6.component.html',
  styleUrls: ['./t6.component.scss']
})
export class T6Component {
  names1 = ['Микола', 'Василь', 'Петро']
  names2 = ['Аня', 'Валя', 'Маша']


  counter = 0

  addName = () => {
    if(this.counter < this.names2.length){
      this.names1.push(this.names2[this.counter])
      this.counter += 1
    }
    else{
      alert("All names added!")
    }
  }
}