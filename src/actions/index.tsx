 
import {FindBestTrip} from './../PathFinderAlgorithm/FindBestTrip'
import IRoutingStrategyBase from './../Interfaces/RouteFInderStrategy/IRouteStrategy';
import {TRIP_DETAILS} from './../Constants/Constants';
import bestTrips from   './../Models/BestTrip';
 
export interface getRoute {

    type: any;
    payload:any
    
}



export function getRoute(deals:any,from:any,to:any,type:any,currency:any):getRoute {
    
    let bestStrp = new bestTrips();

    let RouteStrategy = new IRoutingStrategyBase();
      
    let CurrentStrategy = RouteStrategy.GetRouteAlgorithm(deals,from,to,type)

    // let  pathFinder = new PathFinder(deals,from,to,type );
     let tripGraph  = CurrentStrategy.find();
       
    var bestTrip = new FindBestTrip(tripGraph);

       bestStrp.trips = bestTrip.ParseBestTrip(tripGraph,deals);
       bestStrp.currency = currency;
       bestStrp.from = from;
       bestStrp.to =to;
       bestStrp.type =type;

    
    return { type:TRIP_DETAILS,
             payload:bestStrp
};
};