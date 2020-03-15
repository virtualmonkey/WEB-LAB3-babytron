import { combineReducers } from 'redux';

import * as types from '../types/baby';

/*
baby: {
    odrer: [1,2,3,4,5]
    byId: {
        1: {
            name: Pedro
            lastName: Sánchez
        }
    }
}
*/
const order = (state = [], action) => {
  switch (action.type) {
    case types.BABY_ADDED: {
      return [...state, action.payload.id];
    }
    default: {
      return state;
    }
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.BABY_ADDED: {
      return {
        ...state,
        [action.payload.id]: {
            name: action.payload.name,
            lastName: action.payload.lastName
        },
      };
    }
    default: {
      return state;
    }
  }
};

const baby = combineReducers({
    byId,
    order,
  });
export default baby;


export const getBaby = (state, id) => {id, state.byId[id]};
export const getBabies = state => state.order.map(
  id => getBaby(state, id),
).filter(baby => baby != null);
