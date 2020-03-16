import React from 'react';
import {connect} from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/event'
import moment from 'moment';


const Event = ({selectedBaby,eventObject, onEventDeleted}) => {
	return (	
	
		<div className="pa2 w-100">
			<div className="flex justify-between items-center"> 
				<article className="fl black-50 dib-ns w-auto-ns mr4-m mr5-l pr2 pr0-ns">
					<h1 className="f5 f4-l fw6">{moment(eventObject.event.dateTime).format("ddd, h:mmA")}</h1>
					<span className="f7 f6-l db black-70">{eventObject.event.type}</span>
					<span className="f7 f6-l black-70">{eventObject.event.note}</span>
				</article>
				<button
					className="b ph3 pv2 input-reset ba b--red bg-transparent grow pointer f6 dib ma2"  
					value="delete_event"
					onClick={onEventDeleted}
					>Delete
				</button>
			</div>
		</div>
  );
};

export default connect(
	undefined,
	(dispatch, {selectedBaby, eventObject}) => ({
		onEventDeleted: () => dispatch(actions.deleteEvent(eventObject.id,selectedBaby))
	})
)(Event);