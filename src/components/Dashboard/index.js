import React from 'react';
import {
  useParams,
} from "react-router-dom";
import {connect} from 'react-redux';

import BabyStatus from '../BabyStatus';
import AddEvent from '../AddEvent';
import * as selectors from '../../reducers';


const Dashboard = ({selectedBaby}) => {
  let {babyId} = useParams();
  return (
    <div>
      <h3>{babyId}</h3>
      <BabyStatus />
      <AddEvent selectedBaby={selectedBaby}></AddEvent>
    </div>

  );
};

export default connect(
  state => ({
    selectedBaby : selectors.getSelectedBaby(state)
  })
)(Dashboard);