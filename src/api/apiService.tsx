
import {deals} from './../utils/GetDeals';
import {currency} from './../utils/GetCurrency'


class Deals {
    deals:any;
    currency:number;
}

export const fetchDeals =function() {
   
    var fetchdeals = new Deals();

    fetchdeals.currency = currency;
    fetchdeals.deals = deals;
console.log(fetchdeals);

   return fetchdeals;

}

