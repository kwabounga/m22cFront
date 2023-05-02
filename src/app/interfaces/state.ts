export interface Last {
  id:number;
  index:number;
  url:string;
}
export interface State {
  basicAuth:boolean|string;
  state:boolean;
  last:Last;
  crawled:any[];
  all:any[];
  startAt?:number;
}
