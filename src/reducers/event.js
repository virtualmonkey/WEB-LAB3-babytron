import { combineReducers } from 'redux'
import * as types from '../types/event';

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
            return {
                ...state,
                [action.payload.babyId]: state[action.payload.babyId].filter(event => event === action.payload.id)
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
            const { [action.payload.id]: deleted, ...newState } = state;
            return {
                newState
            }
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

export const getEventListByBabyId = (state, babyId) => state.babiesToEvents[babyId];
export const getEvent = (state, id) => {
    return {
        id: id, 
        event: state.events[id]
    }
};