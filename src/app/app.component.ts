import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tut-ang';

  currentDate = new Date();
}
