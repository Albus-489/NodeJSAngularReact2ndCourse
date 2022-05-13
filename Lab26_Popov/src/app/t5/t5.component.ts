import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t5',
  templateUrl: './t5.component.html',
  styleUrls: ['./t5.component.scss']
})
export class T5Component {
  langs = ['html', 'css', 'js', 'php']

  counter = 0

  addPlus = () => {
    if (this.counter < this.langs.length) {
      this.langs[this.counter] = this.langs[this.counter] + '+'
      this.counter += 1
    }
    else
      alert('All elements ready!')
  }
}