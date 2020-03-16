import React from 'react';
import {Field, reduxForm } from 'redux-form';
import { v4 as uuidv4 } from 'uuid';

import * as actions from '../../actions/event';


const AddEvent = ({handleSubmit, selectedBaby}) =>{
    return (
        <div>
            <main className="pa4 black-80">
                <form className="measure center" onSubmit={handleSubmit}>
                    <fieldset id="add_babie" className="ba b--transparent ph0 mh0">
                        <div className="flex items-center justify-center">
                            <legend className="f4 fw6 ph0 mh0">New Event</legend>
                        </div>
                        <div className="mt3">
                            <div className="flex items-center space-around">
                                <Field className="db f6 bg-white black ph3 pv2 ma2" component="select" name="eventType">
                                    <option value="Nap">Nap</option>
                                    <option value="Feeding Bottle">Feeding bottle</option>
                                    <option value="Diaper Change(1)">Diaper Change(1)</option>
                                    <option value="Diaper Change(2)">Diaper Change(2)</option>
                                    <option value="Breast">Breast</option>
                                </Field>            
                            </div>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="notes">Notes</label>
                            <Field 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="notes" 
                            component="input"/>
                        </div>
                    </fieldset>
                    <div className="tc">
                        <button
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma2" 
                        type="submit" 
                        value="add_baby">Add Event</button>
                    </div>
                </form>
            </main>
        </div>
    )
};
export default reduxForm({
		form: 'addEventForm', // a unique name for this form
		
    onSubmit(values,dispatch, {selectedBaby}){
        let moment = require('moment');
        const uuid = uuidv4();
        dispatch(actions.addEvent(uuid,values.eventType, moment(),values.notes,selectedBaby))
    }
})(AddEvent);




