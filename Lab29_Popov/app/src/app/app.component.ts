import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  foods = ['Pizza', 'Hot-Dog', 'Coca-Cola', 'Sandwitch'];
  tasknums = ['asd', 'qew', 'zxc'];
  selected='noneop';

  rel(){
    this.selected = 'noneop'
  }
}
