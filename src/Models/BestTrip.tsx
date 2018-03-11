// import StoreState from './../Store/IStore';

export default interface StoreState {
   
    trips:Array<any>;
    currency:number;
    from:string;
    to:string;
    type:string;
}


export default class bestTrips implements StoreState {
   
    trips:Array<any>;
    currency:number;
    from:string;
    to:string;
    type:string;

}
