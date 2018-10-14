import { Component, ChangeDetectorRef } from '@angular/core';
import { AppCommonComponent } from '../../app-common.component';

@Component({
  selector: 'app-ac-comp',
  templateUrl: './ac-comp.component.html',
  styleUrls: ['./ac-comp.component.css']
})
export class AcCompComponent extends AppCommonComponent {
  title = 'ac-comp';
}
