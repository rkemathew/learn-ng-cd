import { Component } from '@angular/core';
import { AppCommonComponent } from './app-common.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppCommonComponent {
  title = 'app';
}
