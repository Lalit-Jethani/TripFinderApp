

export const  GetOrderedRoute = (from:any,deals:Array<any>)=>{
    
    var firstTrip = new Array();

    firstTrip = deals;
     firstTrip = firstTrip.filter((trip:any)=> trip.departure ==from);

for(var i=0;i<deals.length;i++)
{
    firstTrip = firstTrip.concat(
        deals.filter((e:any)=>e.departure == firstTrip[i].arrival))

        
        
        
             
}




    return firstTrip;
}







export default GetOrderedRoute;




