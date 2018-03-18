import { PolyFillArrayForIE } from './../Polyfill/ArrayFInd';

export class FindBestTrip {
    deals: any;

    constructor(deals: any) {
        this.deals = deals;
        PolyFillArrayForIE();

    }


    ParseBestTrip(from:string,refs: Array<string>, deals: Array<any>) {

        var filtered = new Array();
        var finalTrips = new Array();
         var preArrival:string = from;

        for (let trip of deals) {
           
            if (refs.find((val) => val == trip.reference))
              filtered.push(trip);

             
        }
        for(var i=0;i<filtered.length;i++)
        {
            if(filtered[i].departure == preArrival)
            {
              finalTrips.push(filtered[i]);
              preArrival = filtered[i].arrival;
            }
           
        }

        return finalTrips;

    }

}