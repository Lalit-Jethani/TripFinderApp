export const  getDiscountedRoute = (deals:any)=>{

    var disCountedCost = new Array(deals.length);

    for(var i=0;i<deals.length;i++)
{
disCountedCost[i] =  deals[i].cost *(1- deals[i].discount/100);
}

return disCountedCost;

}

export default getDiscountedRoute;