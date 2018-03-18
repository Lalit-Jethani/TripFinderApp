import axios from 'axios';
import {REACT_APP_API_URL} from './../Constants/Constants';


export let fetchDeals = ()=>{


   
   return axios.get(REACT_APP_API_URL+'/response.json')
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
   return error
  });

};