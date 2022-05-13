import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab28_Popov';

  showArr = [
    true, true, true, true, true,
    true, true, true
  ]

  hideDiv = (n: number) => {
    this.showArr[n] = !this.showArr[n]
  }
}
