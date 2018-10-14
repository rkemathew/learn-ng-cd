import { Component } from '@angular/core';
import { AppCommonComponent } from '../app-common.component';

@Component({
  selector: 'app-b-comp',
  templateUrl: './b-comp.component.html',
  styleUrls: ['./b-comp.component.css']
})
export class BCompComponent extends AppCommonComponent {
  title = 'b-comp';
}
