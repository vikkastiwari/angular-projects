import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit, OnChanges {
  @Input('serverElAlias') element!: {type:string, name:string, content:string};
  @Input() objElem!: {key1:string,key2:{objEle1:string}};
  @Input() name!: string;
  constructor() {
    console.log('constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }

}
