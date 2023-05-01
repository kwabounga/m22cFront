import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title:string = 'm22cFront';
  terminal:any = { value:"output test"}
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
    },
    {
      title: "Info",
      subTitle: "last crawl",
      description: "renvoi les informations du dernier crawl",
      buttonLabel: "Check",
      buttonStyle: "info",
      url: "http://localhost:1223/last",
    }
  ]
}
