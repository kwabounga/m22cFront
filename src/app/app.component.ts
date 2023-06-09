import { Component, ViewChild, ElementRef } from '@angular/core';
import { State } from './interfaces/state';
import { Buffer } from 'buffer';
import { HttpActionService } from './services/http-action.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  host: {class:"app-root"}
})
export class AppComponent  {
  @ViewChild('preterm') preterm: ElementRef;

  title:string = 'm22cFront';
  terminal:any = { value:"waiting for credentials..."}
  id:number = -1;
  timerUpdater:NodeJS.Timer | undefined;



  credentials = {
    username:'',
    password:''
  }

  state:State = {
    basicAuth:false,
    state:false,
    length:0,
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

  constructor(protected ajax:HttpActionService){}
  updateState(event:State){

    console.log(event, event.last.index);
    this.id = event.last.index;
    this.state = event;
    this.startStopUpdater(this.state.state);

    this.terminal.value = this.state.crawled?.map((s) => {
      return s.url + ' crawled';
    }).join('\n')

    this.preterm.nativeElement.scroll({ top: this.preterm.nativeElement.scrollHeight + 100, behavior: "smooth"})
  }

  unAuth(){
    this.state.state = false;
    this.state.basicAuth = false;
  }
  generateBasicAuth(){
    console.log('credentials', this.credentials);
    let cred = `${this.credentials.username}:${this.credentials.password}`;
    let encoded = Buffer.from(cred).toString('base64');
    console.log('encoded', encoded , `Basic ${encoded}`);


    this.ajax.getUrl('http://localhost:1223/last', {state:false,last:this.state.last, length:0, crawled:[],all:[],basicAuth:`Basic ${encoded}`})
    .subscribe(
      {
        next: (response:State) => {
          // this.state.basicAuth =
          console.log('update status',response)
          this.updateState(response);
        },
        error: (error) => {
          this.unAuth()
          console.error(error.error.message)
          console.error(error.message)
          console.error(error)
        },
        complete: () => console.info('complete')
      }
    )
  }
  startStopUpdater(active:boolean) {
    if(active) {
      if(this.timerUpdater == undefined) {
        this.timerUpdater  = setInterval(()=>{
          this.ajax.getUrl('http://localhost:1223/last', this.state).subscribe(
            {
              next: (response:State) => {
                // this.state.basicAuth =
                console.log('update status',response)
                this.updateState(response);
              },
              error: (error) => {
                this.unAuth()
                console.error(error.error.message)
                console.error(error.message)
                console.error(error)
              },
              complete: () => console.info('complete')
            }
          )
        }, 10000)
      }
    }else{
      clearInterval(this.timerUpdater);
      this.timerUpdater = undefined;
    }

  }
}
