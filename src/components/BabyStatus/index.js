import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

import * as selectors from '../../reducers';
import * as actions from '../../actions/baby';
import DropdownItem from '../DropdownItem';
import {reverse} from 'lodash';


const BabyStatus = ({babies, selectBaby}) => {
    console.log(babies)
    return (
      <div className="flex items-center space-around">
            <select className="db f6 bg-white black ph3 pv2 ma2" onChange={selectBaby}>
              {babies.map((baby, i) =>
                  <DropdownItem 
                  key={i}
                  baby={babies[i]}
                  />
              )}
            </select>
            <Link className="no-underline b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib black ma2" to="/newbaby">Add Baby</Link>
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