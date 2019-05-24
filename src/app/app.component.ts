import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title:"titre 1",
      content: "blah blah 1",
      loveIts: 0,
      createdAt: "10/05/2019"
    },
    {
      title:"titre 2",
      content: "blah blah 2",
      loveIts: 0,
      createdAt: "11/05/2019"
    },
    {
      title:"titre 3",
      content: "blah blah 3",
      loveIts: 0,
      createdAt: "12/05/2019"
    },

  ];
}
