import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  serverElements : {type:string, name:string, content:string} [] = [];
  objElement : {key1:string,key2:{objEle1:string}} = {key1:'hello',key2:{objEle1:'bolo'}};
  name:string = 'name';

  constructor(){
    // this.serverElements = [{type:'server',name:'test',content:'testing'}];
  }
  
  onServerAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  changeElement(){
    this.name = 'name changed!';
    console.log(this.objElement.key2.objEle1);
    // this.objElement.key2.objEle1 = 'bolo changed';
    // this.objElement = 'bolo changed';
  }
}
