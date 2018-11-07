import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-essentials';
  subtitle = 'Hello World';
  rootName = 'Phil';

  clickHandler() {
    this.subtitle = this.subtitle === 'Hello World' ? 'Goodbye' : 'Hello World';
  }

  onNameChanged(newName) {
    this.rootName = newName;
  }
}
