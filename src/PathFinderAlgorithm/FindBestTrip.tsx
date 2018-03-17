

export class FindBestTrip {
    deals: any;

    constructor(deals: any) {
        this.deals = deals;
       

    }


    ParseBestTrip(refs: Array<string>, deals: Array<any>) {

        var filtered = new Array();

        for(let i=0;i<refs.length;i++ )
        {

        for(let j=0;j<deals.length;j++){
            if(deals[j].reference==refs[i])
            {
                filtered.push(deals[j]);
            }

        }
    }

        

        return filtered;

    }

}