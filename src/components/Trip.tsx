
import * as React from 'react';
import { getTransportIcons } from './../utils/GetTransportIcon';
import {  currency } from './../utils/GetCurrency';




function Trip(props: any) {


    return (
        <div className="arrow container-fluid">

            <div className=" travel-box">

                <div className="row">

                    <div className="col-6  col-md-6 col-lg-2">
                        <i className="large material-icons">adjust</i>
                    </div>

                    <div className="place">
                        {props.departure}
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 col-md-6 col-lg-2">



                        <i className="large material-icons">{getTransportIcons(props.transport)}</i>
                    </div>
                    <div className="vehicle">
                        {props.transport}
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 col-md-6 col-lg-2">
                        <i className="large material-icons">timer</i>
                    </div>
                    <div className="time">
                        {props.duration.h} : {props.duration.m} hrs
       </div>
                </div>

                <div className="row">
                    <div className="col-6 col-md-6 col-lg-2">
                        <i className="large material-icons">attach_money</i>
                    </div>
                    <div>
                        {props.cost * (1 - props.discount / 100)} {currency}
       </div>
                </div>

                <div className="row">
                    <div className="col-6 col-md-6 col-lg-2">
                        <i className="large material-icons">adjust</i>
                    </div>
                    <div className="place">
                        {props.arrival}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trip;

// helpers


