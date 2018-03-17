// import StoreState from './../Store/IStore';

export default interface StoreState {
   
    trips:Array<any>;
    currency:number;
    from:string;
    to:string;
    type:string;
    deals:Array<any>
}


export default class Trips implements StoreState {
   
    trips:Array<any>;
    currency:number;
    from:string;
    to:string;
    type:string;
    deals:Array<any>

}
