import { getRoute } from './../actions';
import { TRIP_DETAILS } from './../Constants/Constants';
import { StoreState } from './../Store/IStore';
import bestTrips from './../Models/Trips'



export default function GetRoute(state: StoreState, action: getRoute): StoreState {
    state = new bestTrips();


    switch (action.type) {

        case TRIP_DETAILS:
            const newState = {...state};

            newState.trips = action.payload.trips;
            newState.from = action.payload.from;
            newState.to = action.payload.to;
            newState.currency = action.payload.currency;
            newState.type = action.payload.type;
            localStorage.setItem("state", JSON.stringify(newState));
            return newState;

        default:

            state = new bestTrips();

            return state;
    }
}