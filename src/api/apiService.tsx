
import {deals} from './../utils/GetDeals';
import {currency} from './../utils/GetCurrency'


class Deals {
    deals:any;
    currency:number;
}

function fetchDeals() {
   
    var fecthdeals = new Deals();

    fecthdeals.currency = currency;
    fecthdeals.deals = deals;
console.log(fecthdeals);

   return fetchDeals;

}

export const fetchDeal = fetchDeals();