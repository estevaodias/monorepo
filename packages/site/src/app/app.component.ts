import { Component } from '@angular/core';
import { hello } from '@rumble/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = hello();
}
