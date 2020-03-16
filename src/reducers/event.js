
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
const event = (state = {}, action) => {
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
            const { [action.payload]: deleted, ...newState } = state;
            return {
                newState
            }
        }
        default: {
            return state;
        }
    }
};
export default event;
export const getEvent = (state, id) => {
    return {
        id: id, 
        event: state.event[id]
    }
};