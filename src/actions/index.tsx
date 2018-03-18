 
import {FindBestTrip} from './../PathFinderAlgorithm/FindBestTrip'
import IRoutingStrategyBase from './../Interfaces/RouteFInderStrategy/IRouteStrategy';
import {TRIP_DETAILS, REQUEST_DEALS} from './../Constants/Constants';
import bestTrips from   './../Models/Trips';

import {deals} from './../utils/GetDeals';
import {currency} from './../utils/GetCurrency'



 
export interface getRoute {

    type: any;
    payload:any
    success:boolean;
    
}

export interface getDeals {

    type: any;
    payload:any
    success:boolean;
    
}



export function getRoute(deals:any,from:any,to:any,type:any,currency:any):getRoute {
    
    let bestStrp = new bestTrips();
    let RouteStrategy = new IRoutingStrategyBase();
    let CurrentStrategy = RouteStrategy.GetRouteAlgorithm(deals,from,to,type)
     let tripGraph  = CurrentStrategy.find();
       
    var bestTrip = new FindBestTrip(tripGraph);

       bestStrp.trips = bestTrip.ParseBestTrip(from,tripGraph,deals);
       bestStrp.currency = currency;
       bestStrp.from = from;
       bestStrp.to =to;
       bestStrp.type =type;

    
    return { type:TRIP_DETAILS,
             payload:bestStrp,
             success:true
};
};

export function getDeals() {

    class Deals {
        deals:any;
        currency:number;
    }
        


       
const dealsTrip = new Deals();
dealsTrip.currency = currency;
dealsTrip.deals = deals;

console.log(dealsTrip);

        return { type:REQUEST_DEALS,
            payload:dealsTrip,
            success:true
};
    
   
   
 
 }
 