import * as data from './../api/response.json';

function MockApiResponse() {
    const response: any = data;
    return {
      response
    }
  }


export  const  deals  = MockApiResponse().response.deals;