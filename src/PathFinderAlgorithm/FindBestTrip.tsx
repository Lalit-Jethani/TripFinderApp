import { PolyFillArrayForIE } from './../Polyfill/ArrayFInd';

export class FindBestTrip {
    deals: any;

    constructor(deals: any) {
        this.deals = deals;
        PolyFillArrayForIE();

    }


    ParseBestTrip(refs: Array<string>, deals: Array<any>) {

        var filtered = new Array();

        for (let word of deals) {
            if (refs.find((val) => val == word.reference)) filtered.push(word);
        }

        return filtered;

    }

}