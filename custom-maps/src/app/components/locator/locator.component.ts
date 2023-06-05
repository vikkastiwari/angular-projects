import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// Declare google variable to avoid TypeScript errors
declare const google: any;

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css']
})
export class LocatorComponent implements OnInit {

  map: any;

  ngOnInit() {

  }

  highlightLocation(event:any){

  }

  highlightMarker(event:any){

  }

}

