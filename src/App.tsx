import * as React from 'react';
import './App.css';
import SearchRoute from  './components/searchRoute';
import Triplist from  './components/Triplist';
import  {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';





class App extends React.Component {
  render() {
    return (

      <div className="App">
      <Header></Header>
      <BrowserRouter>
      <div>
        <Switch>
        <Route path="/trip" component = {Triplist}/>
        <Route path="/" component = {SearchRoute}/>
       
        </Switch>
    
     </div>
     </BrowserRouter>
      </div>
    );
  }
}

export default App;
