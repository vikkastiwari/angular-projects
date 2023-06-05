import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vt-ui-lib';

  navTabs = [
    {
      name:'Auto Complete',
      images:'',
      alt:'',
      route:''
    },
    {
      name:'Badge',
      images:'',
      alt:'',
      route:''
    },
    {
      name:'Bottom Sheet',
      images:'',
      alt:'',
      route:''
    },
  ]
}
