import * as React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import * as getRoute from './../actions/index';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { getTotalUnits } from './../PathFinderAlgorithm/getTotalUnits'
import { createTripRefMap } from './../PathFinderAlgorithm/createTripRefMap'
import { createCitiesList } from './../PathFinderAlgorithm/createCitiesList'
import { Typeahead } from 'react-bootstrap-typeahead'
import { currency } from './../utils/GetCurrency';
import { deals } from './../utils/GetDeals';


class SearchRoute extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      from: "", to: "", deals: "", type: "",
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

  componentWillMount() {

    const tripRefMap = createTripRefMap(deals);
    const citiesList = createCitiesList(deals);
    this.setState({ deals, tripRefMap, currency, citiesList });

  }

  parseBestTrip(refs: Array<string>) {
    let trips: Array<any> = [];
    refs.forEach(ref => trips.push(this.state.tripRefMap[ref]));
    let total: Object = getTotalUnits(trips);
    this.setState({ trips, total, loading: false });
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
        this.props.getRoute(this.state.deals, this.state.from, this.state.to, this.state.type, this.state.currency);
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

                            options={this.state.citiesList}
                            placeholder="Enter Source"
                          />
                          <div>
                            {
                              this.state.handleSubmitFrom || this.state.handleSubmit ?
                                null : <label className="Errorform">From Location is Required!</label>
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

                            options={this.state.citiesList}
                            placeholder="Enter Destination"
                          />
                          <div>
                            {
                              this.state.handleSubmitTo || this.state.handleSubmit ?
                                null : <label className="Errorform">To Location is Required!</label>
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

function mapDispatchToProps(dispatch: Dispatch<getRoute.getRoute>) {

  return bindActionCreators({ getRoute: getRoute.getRoute }, dispatch);


}

function mapStateToProps(state: any) {
  return { data: state.getRoute };
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchRoute);

