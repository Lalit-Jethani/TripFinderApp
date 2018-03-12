import {PolyFillArrayForIE} from './../Polyfill/ArrayFInd';

export class FindBestTrip

{
      deals:any;

    constructor(deals:any){
         this.deals = deals;
          PolyFillArrayForIE();

    }

  
    ParseBestTrip(refs:Array<string>,deals:Array<any>){
        
        var filtered = new Array();

        for(let word of deals){
            if(refs.find((val) => val == word.reference))filtered.push(word);
        }
       

       // filtered = filtered.map(this.sortCustom );

        return filtered;
       
    }
    sortCustom(a:any, b:any){

        var nameA = a.arrival; // ignore upper and lowercase
  var nameB = b.departure; // ignore upper and lowercase
  if (nameA == nameB) {
    return -1;
  }
  if (nameA == nameB) {
    return 1;
  }

  // names must be equal
  return 0;

    }

  

}