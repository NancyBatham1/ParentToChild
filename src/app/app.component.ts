import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'parenttochild';
  course: any[] = [
    { id: 1, name: 'AngularJs', level: 'beginner level', dept: 'D1' },
    { id: 2, name: 'Angular', level: 'Advanced level', dept: 'D2' },
    { id: 3, name: 'React', level: 'Intermediate level', dept: 'D1' },
    { id: 4, name: 'NodeJs', level: 'beginner level', dept: 'D2' },
  ];
  filtercou!: any[];

  filterCousrese(selectedName: string) {
    selectedName === 'All'
      ? (this.filtercou = this.course)
      : (this.filtercou = this.course.filter((c) => c.dept === selectedName));
  }

  ngOnInit() {
    this.filtercou = this.course;
  }
}
