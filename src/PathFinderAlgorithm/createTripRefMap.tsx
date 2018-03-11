// @flow

export  const createTripRefMap = (deals: Array<any>) => {
    let map = {};
    deals.forEach(item => map[item.reference] = item);
    return map;
  };
  
