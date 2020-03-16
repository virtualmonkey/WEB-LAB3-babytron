import React from 'react';
import {connect} from 'react-redux';
import reverse from 'lodash/reverse';

import Event from '../Event';
import * as selectors from '../../reducers';
import * as actions from '../../actions/event'


const EventsList = ({selectedBaby, eventsList}) => {
    return (
        <div>
        <div className="flex flex-column justify-center items-start">
            {eventsList.map((event,i) => {
                return (
                    <Event
                    key={i}
                    selectedBaby={selectedBaby}
                    eventObject={event}
                    />
                )
            })}
        </div>
        </div>
    );
};

export default connect(
  (state, {selectedBaby}) => {
    return {
			eventsList: reverse([... selectors.getEventListByBabyId(state,selectedBaby)])
    }
}
)(EventsList);