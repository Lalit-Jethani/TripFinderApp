// @flow

export const createCitiesList = (deals: Array<any> = []) => {
    let addedList:any = [];
    let list:any = [];
  
    const addCity = (city:any) => {
      if(addedList.indexOf(city) === -1) {
        addedList.push(city);
        list.push(city);
      }
    };
  
    if(deals)
    {
    deals.forEach(item => {
      addCity(item.departure);
      addCity(item.arrival);
    });
  }
  
    list.sort();
  
    return list;
  };
  
