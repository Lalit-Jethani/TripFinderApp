import axios from 'axios';
import {API_URL} from './../Constants/Constants';


export let fetchDeals = ()=>{

    console.log("api url"+process.env.NODE_ENV);

   return axios.get(API_URL+'/response.json')
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
   return error
  });

};