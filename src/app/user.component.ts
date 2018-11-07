import { Component, Input, Output, EventEmitter } from '@angular/core';
import axios from 'axios';

const DEFAULT_VALUE = 'CLICK ME!';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

export class UserComponent {

  value = DEFAULT_VALUE;
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>(false);

  userDetails = {
    age: 29,
    status: 'Single',
    name: this.name
  };

  handleClick() {
    this.getTrumpQuote();
  }

  getTrumpQuote() {
    axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
      .then((data) => {
        this.value = `${data.data.message} - Trump`;
        setTimeout(() => this.value = DEFAULT_VALUE, 5000);
      });
  }

  handleUserInput(evt) {
    // console.log(evt.target.value);
    // this.name = evt.target.value;
    this.nameChanged.emit(evt.target.value);
  }

}
