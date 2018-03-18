import { getDeals } from './../actions';
import {  REQUEST_DEALS } from './../Constants/Constants';
import { StoreState } from './../Store/IStore';
import Trips from './../Models/Trips'



export default function GetDeals(state: StoreState, action: getDeals): StoreState {
    state = new Trips();


    switch (action.type) {

        case REQUEST_DEALS:
            const newState = {...state};
         
            newState.deals = action.payload.deals;
            newState.currency = action.payload.currency;
            
            
            localStorage.setItem("state", JSON.stringify(newState));
          
            return newState;

        default:
     
            state = new Trips();

            return state;
    }
}