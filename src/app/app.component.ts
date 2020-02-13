import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
