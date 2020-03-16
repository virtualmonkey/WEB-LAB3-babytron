import { combineReducers } from 'redux'
import * as types from '../types/event';
import omit from 'lodash/omit';
/*

events: {
    byId: {
        1abc: {
            type: 'popo'
            dateTime: 22-10-2020
            notes: 'mucho'
        }
    }
}
*/
const babiesToEvents = (state = {}, action) =>{
    switch(action.type){
        case types.EVENT_ADDED: {
            if (state[action.payload.babyId] !== undefined){
                return {
                    ...state, 
                    [action.payload.babyId]: [...state[action.payload.babyId], action.payload.id]
                }
            } else {
                return {
                    ...state,
                    [action.payload.babyId]: [action.payload.id]
                }
            }
            
        }
        case types.EVENT_DELETED: {
            let variable = state[action.payload.babyId].filter(event => event !== action.payload.id)
            return {
                ...state,
                [action.payload.babyId]: variable
            }
        }
        default: return state
    }
}
const events = (state = {}, action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id]: {
                    type: action.payload.type,
                    dateTime: action.payload.dateTime,
                    note: action.payload.note
                },
            };
        }
        case types.EVENT_DELETED: {
            return omit(state,action.payload.id)
        }
        default: {
            return state;
        }
    }
};
const event = combineReducers({
    events,
    babiesToEvents
});
export default event;

export const getEvent = (state, id) => {
    return {
        id: id, 
        event: state.events[id]
    }
};
export const getEventListByBabyId = (state, babyId) => {
    if (state.babiesToEvents[babyId]){
        return state.babiesToEvents[babyId].map(eventId => getEvent(state,eventId));
    } else {
        return []
    }
}
