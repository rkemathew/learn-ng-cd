import { Component, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppCommonComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnChanges {
  title = 'app';
  isDisplayOutText = false;
  isFired = false;

  constructor(
    protected cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.outText(this.title + ' ngOnInit fired');
  }

  ngOnChanges() {
    this.outText(this.title + ' ngOnChanges fired', true);
  }

  ngDoCheck() {
    this.outText(this.title + ' ngDoCheck fired', true);
  }

  ngAfterContentInit() {
    this.outText(this.title + ' ngAfterContentInit fired');
  }

  ngAfterContentChecked() {
    this.outText(this.title + ' ngAfterContentChecked fired');
  }

  ngAfterViewInit() {
    this.outText(this.title + ' ngAfterViewInit fired');
  }

  ngAfterViewChecked() {
    this.outText(this.title + ' ngAfterViewChecked fired');
  }

  outText(text, isOverride=false) {
    if (this.isDisplayOutText || isOverride) {
      console.log(text);
    }
  }

  buttonClicked() {
    this.outText('*** ' + this.title + ' button was clicked ***', true);
  }
}
