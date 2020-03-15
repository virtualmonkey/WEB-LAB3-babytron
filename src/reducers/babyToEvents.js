import * as types from '../types/babyToEvents';
/*
babyToEvents: {
    1: [asdf,bce]
    2: [acn, d2]

}
*/
const babyToEvents = (state = {}, action) => {
  switch (action.types) {
    case types.ADDED_EVENT_TO_BABY: {
      return {
        ...state,
        [action.payload.babyId]: [...state.action.payload.babyId, action.payload.eventId],
      };
    }
    case types.DELETED_EVENT_FROM_BABY: {
        return {
            ...state,
            [action.payload.babyId] : state[action.payload.babyId].filter(event => event === action.payload.eventId)
        }
    }
    default: {
      return state;
    }
  }
};
export default babyToEvents;
export const getEventListByBabyId = (state, babyId) => state.babyToEvents[babyId];
