 

export const TRIP_DETAILS = 'TRIP_DETAILS';
export const REQUEST_DEALS = "REQUEST_DEALS";
export const RECIEVE_DEALS = "RECIEVE_DEALS";
export type TRIP_DETAILS_TYPE = typeof TRIP_DETAILS;

export const REACT_APP_API_URL = process.env.NODE_ENV === 'production' ? 

"https://tripfinder-lalit.herokuapp.com": "http://localhost:3000" ;

