import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}
  Coursenames!: any[];
  @Input() set emps(empsdata: any[]) {
    this.Coursenames = empsdata;
  }

  ngOnInit(): void {}
}
