import * as React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import * as ActionCreators from './../actions/';

import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { createCitiesList } from './../utils/createCitiesList'
import { Typeahead } from 'react-bootstrap-typeahead'

import { deals } from './../utils/GetDeals';


class SearchRoute extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      from: "", to: "", type: "",
      handleSubmitTo: true,
      handleSubmitFrom: true,
      handleSubmitType: true,
      handleSubmit: true,
      FromAndToSame: false

    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnChangeTo = this.handleOnChangeTo.bind(this);
  }

  componentDidMount(){
    
   
    this.props.getDeals();
   

  }

 


  public handleOnChange(event: any): void {
    this.setState({ from: event[0] });
    if (this.state.from != "" || event[0] != undefined) {
      this.setState({
        handleSubmitFrom: true
      });
    }
  }

  public handleOnChangeTo(event: any): void {
    this.setState({ to: event[0] });
    if (this.state.to != "" || event[0] != undefined) {
      this.setState({ handleSubmitTo: true });
    }

  }

  public handleOnChangeType(event: any): void {
    this.setState({ type: event.target.value });
    if (this.state.type != "" || event.target.value != undefined) {
      this.setState({ handleSubmitType: true });
    }

  }

  public onFormSubmit(event: any): void {
    event.preventDefault();
    if ((this.state.from != "" && this.state.from != undefined) &&
      (this.state.to != "" && this.state.to != undefined &&
        this.state.type != "" && this.state.type != undefined
      )
    ) {
      if (this.state.from == this.state.to) {
        this.setState({ FromAndToSame: true });
      }
      else {
        this.props.getRoute(deals, this.state.from, this.state.to, this.state.type, this.props.currency);
        this.props.history.push('/trip');
        this.setState({ FromAndToSame: false });
      }
    }
    else {
      this.setState({ handleSubmit: false });
      if (this.state.from == "" || this.state.from == undefined)
        this.setState({ handleSubmitFrom: false });
      if (this.state.to == "" || this.state.to == undefined)
        this.setState({ handleSubmitTo: false });
      if (this.state.type == "" || this.state.type == undefined ||
        this.state.typeOption == "")
        this.setState({ handleSubmitType: false });


    }

  }
  resetFilter() {
    this.setState({
      trips: [],
      from: '',
      to: '',
      type: ''
    })
  }

  render() {

    const styles = {
      active: {
        backgroundColor: "white",
        color: "black"
      }
    };




    return (


      (
        <div className="main-container">

          <div className="wrap-contact100">
            <h3 className="TripFormText">Select Trip</h3>
            <div>
              <div id="wrapper" className="container" >

                <form id="form-work" onSubmit={this.onFormSubmit}>

                  <fieldset>
                    <div>
                      {
                        this.state.FromAndToSame ?
                          <label className="Errorform">Source and Destination cannot be same!</label> : null
                      }

                    </div>

                    <div className="form-group">
                      <div className="col-md-6">
                        <label className="control-label" >From</label>
                        <div className="customTypeAhead">
                          <Typeahead onChange={this.handleOnChange}
                            labelKey="name"

                            options={this.props.citiesList}
                            placeholder="Enter Source"
                          />
                          <div>
                            {
                              this.state.handleSubmitFrom || this.state.handleSubmit ?
                                null : <label className="Errorform">Please select a valid From location!</label>
                            }

                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="form-group">
                      <div className="col-md-6">
                        <label className="control-label" >To</label>
                        <div style={styles} className="customTypeAhead">
                          <Typeahead
                            onChange={this.handleOnChangeTo}
                            labelKey="name"

                            options={this.props.citiesList}
                            placeholder="Enter Destination"
                          />
                          <div>
                            {
                              this.state.handleSubmitTo || this.state.handleSubmit ?
                                null : <label className="Errorform">Please select a valid To location!</label>
                            }

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-md-6">
                        <div >
                          <ButtonGroup>

                            <Button active className="buttonSelect button2" value="cheapest" onClick={e => this.handleOnChangeType(e)}>Cheapest

            </Button>
                            <Button name="groupOptions" value="fastest" className="buttonSelect button2" onClick={e => this.handleOnChangeType(e)}>Fastest</Button>

                          </ButtonGroup>
                        </div>
                        <div>
                          {
                            this.state.handleSubmitType || this.state.handleSubmit ?
                              null : <label className="Errorform">Trip Type  is Required!</label>
                          }

                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="form-group">
                      <div className="col-md-12">
                        <button onClick={this.onFormSubmit} type="submit" className="btn btn-primary  btn-block info">Search Route</button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {

  return bindActionCreators({ getRoute: ActionCreators.getRoute,getDeals:ActionCreators.getDeals }, dispatch);
}

function mapStateToProps(state: any) {
 
  return {  

    deals:state.getDeals.deals,
    citiesList: createCitiesList(state.getDeals.deals),
    currency: state.getDeals.currency
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchRoute);

