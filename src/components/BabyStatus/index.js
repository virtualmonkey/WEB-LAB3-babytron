import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

import * as selectors from '../../reducers';
import * as actions from '../../actions/baby';
import DropdownItem from '../DropdownItem';
import {reverse} from 'lodash';


const BabyStatus = ({babies, selectBaby}) => {
    return (
      <div className="pa2 w-100">
        <fieldset id="add_babie" className="ba b--transparent ph0 mh0">
          <div className="flex items-center justify-center">
              <legend className="f4 fw6 ph0 mh0">Baby Details</legend>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6 pv2" htmlFor="babyName">Baby's Name</label>
            <div className="flex items-center justify-center">
              <select className="db f6 bg-white black ph3 pv2 w-100" onChange={selectBaby}>
                {babies.map((baby, i) =>
                    <DropdownItem 
                    key={i}
                    baby={babies[i]}
                    />
                )}
              </select>
              <Link className="no-underline b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib black mh2" to="/newbaby">Add Baby</Link>
            </div>
          </div>
        </fieldset>
      </div>     
    );
  };
  
  export default connect(
      state => ({
          babies : reverse(selectors.getBabies(state))
      }), 
      dispatch => ({
        selectBaby(event) {
            let select = event.target;
            let babyId = select.options[select.selectedIndex].getAttribute("value");
            dispatch(actions.selectBaby(babyId))
        }
      })
  )(BabyStatus);