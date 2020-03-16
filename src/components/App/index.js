import React from 'react';
import 'tachyons';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import * as selectors from '../../reducers';
import AddBaby from '../AddBaby';
import Dashboard from '../Dashboard';


const App = ({doBabiesExist}) => (
  <Router>
      <Route exact path="/" 
      render={(props) => <AddBaby {...props} doBabiesExist={false} />} />
      <Route exact path="/dashboard/:babyId" component={Dashboard} />
      <Route exact path="/newbaby"
       render={(props) => <AddBaby {...props} doBabiesExist={true} />}/>
  </Router>  
);


export default connect(
  state => ({ 
    doBabiesExist: selectors.getBabies(state).length > 0 ? true : false
  }), undefined
)(App);