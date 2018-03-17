 
import {FindBestTrip} from './../PathFinderAlgorithm/FindBestTrip'
import IRoutingStrategyBase from './../Interfaces/RouteFInderStrategy/IRouteStrategy';
import {TRIP_DETAILS, REQUEST_DEALS, RECIEVE_DEALS} from './../Constants/Constants';
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

       bestStrp.trips = bestTrip.ParseBestTrip(tripGraph,deals);
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

    return function action(dispatch:any) {
        dispatch({ type: REQUEST_DEALS })
    
        const request = fetchDeals();
        
        return request.then(
          response => dispatch({
                   
            type:RECIEVE_DEALS,
            payload: response.data,
            success : true

        }, console.log(response)),
          err => dispatch( err= {
                   
            type:RECIEVE_DEALS,
            payload:err,
            success : false

        })
        );
      }
    
    
   
   
 
 }
 