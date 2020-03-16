import React from 'react';
import {
  useParams,
} from "react-router-dom";
import {connect} from 'react-redux';

import BabyStatus from '../BabyStatus';
import AddEvent from '../AddEvent';
import EventsList from '../EventsList';
import * as selectors from '../../reducers';


const Dashboard = ({selectedBaby}) => {
  return (
    <div className="pa2">
      <div className="flex flex-row justify-center items-start flex-wrap">
        <div className="flex flex-column justify-center items-start flex-wrap">
          <BabyStatus />  
          <EventsList selectedBaby={selectedBaby}/>
        </div>
        <AddEvent selectedBaby={selectedBaby} />
      </div>
    </div>

  );
};

export default connect(
  state => ({
    selectedBaby : selectors.getSelectedBaby(state)
  })
)(Dashboard);