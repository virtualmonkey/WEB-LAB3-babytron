import React from 'react';
import {Field, reduxForm } from 'redux-form';
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';

import { Link } from "react-router-dom";

import * as actions from '../../actions/baby';
import * as selectors from '../../reducers';

const AddBaby = ({handleSubmit, doBabiesExist, selectedBaby}) =>{
    return (
        <div>
            <main className="pa4 black-80">
                <form className="measure center" onSubmit={handleSubmit}>
                    <fieldset id="add_babie" className="ba b--transparent ph0 mh0">
                        <div className="flex items-center justify-center">
                            {(doBabiesExist === true) ? 
                            <legend className="f4 fw6 ph0 mh0">New Baby</legend>:
                            <legend className="f4 fw6 ph0 mh0">It's a bit Lonely in here! Add a Baby!</legend>}
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Baby's Name(s)</label>
                            <Field 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="firstName" 
                            component="input"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="lastName">Baby's Last Name(s)</label>
                            <Field 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="lastName" 
                            component="input"/>
                        </div>
                    </fieldset>
                    <div className="tc">
                        <button
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma2" 
                        type="submit" 
                        value="add_baby">Add Baby</button>
                        <Link className="no-underline b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib black ma2" to={`/dashboard/${selectedBaby}`}>Dashboard</Link>
                    </div>
                </form>
            </main>
        </div>
    )
};
export default reduxForm({
    form: 'addBaby', // a unique name for this form
    onSubmit(values,dispatch){
        const uuid = uuidv4();
        dispatch(actions.addBaby(uuid,values.firstName,values.lastName));
    }
})(connect(
    state => ({ selectedBaby: selectors.getSelectedBaby(state)})
)(AddBaby));




