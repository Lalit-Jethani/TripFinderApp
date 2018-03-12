import { connect } from 'react-redux';
import * as React from 'react';
import Trip from './Trip';
import GetOrderedRoute from './../utils/GetOrderedRoute';
import { getTotalUnits } from './../PathFinderAlgorithm/getTotalUnits';
import {  currency } from './../utils/GetCurrency';






class Triplist extends React.Component<any, any> {


  constructor(props: any) {
    super(props);
    this.state = { handleReset: "" };
    this.onBacktoSearch = this.onBacktoSearch.bind(this);
    
  }


 



  renderData(data: any) {
      
   
  
    return (
      <div key={data.arrival}>

        <Trip  {...data=data} />
        <hr />
      </div>
    )
  }

  onBacktoSearch() {
    this.props.history.push('/');
  }

  render() {
   
    let localState: any;
    if (!this.props.Data.trips) {
      localState = localStorage.getItem("state");
      localState = JSON.parse(localState);

    }

    if (!localState) {
    
      var result = GetOrderedRoute(this.props.Data.from, this.props.Data.trips);
      var totalTime = getTotalUnits(this.props.Data.trips);
    }
    else {
      var result = GetOrderedRoute(localState.from, localState.trips);
      var totalTime = getTotalUnits(localState.trips);


    }

    console.log(this.props.Data);

    return (
      <div>



        <div >
          <a href="#" className="btn btn-primary btn-lg active btnBack" onClick={this.onBacktoSearch} role="button" aria-pressed="true">Search Again</a>


        </div>

        <div>

          <div className="Infomsg">
            <p className="text-info">
              The {
                localState != undefined ? localState.type
                  : this.props.Data.type
              } trip to travel from<span className="text-uppercase"> {localState != undefined ? localState.from : this.props.Data.from} </span> to <span className="text-uppercase">{localState != undefined ? localState.to : this.props.Data.to}</span> will take <span className="text-uppercase">{totalTime.time.h}</span> hours and

         <span> {totalTime.time.m}</span> minutes .You will
           need<span className="text-uppercase"> {totalTime.stops} </span> Stop(s).The Total cost of the journey would be <span> {totalTime.cost} </span> {currency} after calculating discounts.
           </p>

          </div>
          <div>
            <h3 className="TripFormText tripDetails">Trip Details</h3>
          </div>

        </div>

        <div className="container">

          <div className="row">

            <div className="col-sm-12  col-lg-2">



            </div>
            <div className="col-lg-10">
              {result.map(this.renderData)}
            </div>
          </div>
        </div>

      </div>
    );
  }

}
function mapStateToProps(state: any) {
  return { Data: state.getRoute };
}

export default connect(mapStateToProps)(Triplist);