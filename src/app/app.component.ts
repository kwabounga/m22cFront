import { Component } from '@angular/core';
import { State } from './interfaces/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title:string = 'm22cFront';
  terminal:any = { value:"output test"}
  id:number = -1;

  state:State = {
    state:false,
    last:{
      id:-0,
      index:-1,
      url:''
    },
    crawled:[],
    all:[]
  };

  actions:any[] = [
    {
      title: "Start",
      subTitle: "activate crawl",
      description: "reconnection, nouveau token, liste maj des urls et relance le crawl",
      buttonLabel: "Activer le crawl",
      buttonStyle: "success",
      url: "http://localhost:1223/start",
    },
    {
      title: "Stop",
      subTitle: "stop current crawl",
      description: "stop le crawl courant, garde en mémoire la session, renvoi les info du dernier crawl",
      buttonLabel: "Arrêter le crawl",
      buttonStyle: "danger",
      url: "http://localhost:1223/stop",
    },
    {
      title: "Start At",
      subTitle: "activate crawl at position",
      description: "relance le crawl là ou il s'était arrêté",
      buttonLabel: "Relancer à :id",
      buttonStyle: "warning",
      url: "http://localhost:1223/start/:id",
      id:true
    },
    {
      title: "Info",
      subTitle: "last crawl",
      description: "renvoi les informations du dernier crawl",
      buttonLabel: "Check",
      buttonStyle: "info",
      url: "http://localhost:1223/last",
    }
  ];

  updateState(event:State){

    console.log(event, event.last.index)
    this.id = event.last.index
    this.state = event;
      this.terminal.value = this.state.crawled?.map((s)=>{
        return s.url + ' crawled'
      }).join('\n')
  }
}
