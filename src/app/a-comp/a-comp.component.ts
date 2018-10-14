import { Component } from '@angular/core';
import { AppCommonComponent } from '../app-common.component';

@Component({
  selector: 'app-a-comp',
  templateUrl: './a-comp.component.html',
  styleUrls: ['./a-comp.component.css']
})
export class ACompComponent extends AppCommonComponent {
  title = 'a-comp';
}
