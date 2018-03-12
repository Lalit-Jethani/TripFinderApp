import { getRoute } from './../actions';
import { TRIP_DETAILS } from './../Constants/Constants';
import { StoreState } from './../Store/IStore';
import bestTrips from './../Models/BestTrip'



export default function GetRoute(state: StoreState, action: getRoute): StoreState {
    state = new bestTrips();


    switch (action.type) {

        case TRIP_DETAILS:

            state.trips = action.payload.trips;
            state.from = action.payload.from;
            state.to = action.payload.to;
            state.currency = action.payload.currency;
            state.type = action.payload.type;
            localStorage.setItem("state", JSON.stringify(state));
            return state;

        default:

            state = new bestTrips();

            return state;
    }
}