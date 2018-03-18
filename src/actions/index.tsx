 
import {FindBestTrip} from './../PathFinderAlgorithm/FindBestTrip'
import IRoutingStrategyBase from './../Interfaces/RouteFInderStrategy/IRouteStrategy';
import {TRIP_DETAILS, REQUEST_DEALS} from './../Constants/Constants';
import bestTrips from   './../Models/Trips';
import {fetchDeals} from './../api/apiService';



 
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

    
        
let request = fetchDeals();

        console.log(request);

        return { type:REQUEST_DEALS,
            payload:request,
            success:true
};
    
   
   
 
 }
 