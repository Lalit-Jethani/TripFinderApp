
export const TRIP_DETAILS = 'TRIP_DETAILS';
export const REQUEST_DEALS = "REQUEST_DEALS";
export const RECIEVE_DEALS = "RECIEVE_DEALS";
export type TRIP_DETAILS_TYPE = typeof TRIP_DETAILS;
export const API_URL = process.env.NODE_ENV === 'development' ? 

 "http://localhost:3000" : "https://tripfinder-lalit.herokuapp.com" ;

