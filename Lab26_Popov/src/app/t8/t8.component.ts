import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t8',
  templateUrl: './t8.component.html',
  styleUrls: ['./t8.component.scss']
})
export class T8Component{
  cities = [
    { cr: 'Україна', city: ['Київ', 'Львів']},
    { cr: 'Польща', city: ['Варшава', 'Лодзь'] },
    { cr: 'Великобританія', city: ['Лондон', 'Манчестер'] },
  ]
}
