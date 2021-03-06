import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import axios from 'axios';

const DEFAULT_VALUE = 'CLICK ME!';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

export class UserComponent implements OnInit {

  value = DEFAULT_VALUE;
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>(false);

  userDetails = {
    age: 29,
    status: 'Single',
    name: this.name
  };

  ngOnInit() {
    this.userDetails.name = this.name;
  }

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
    this.userDetails.name = evt.target.value;

    if (evt.target.value === 'password') {
      this.userDetails.name = 'Phil';
      this.userDetails.age = 30;
    }
  }

}
