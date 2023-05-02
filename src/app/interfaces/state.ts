export interface Last {
  id:number;
  index:number;
  url:string;
}
export interface State {
  state:boolean;
  last:Last;
  crawled:any[];
  all:any[];
  startAt?:number;
}
