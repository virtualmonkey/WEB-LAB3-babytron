import * as types from '../types/event';

export const addEvent = (id, type, dateTime, note, babyId) => ({
    type: types.EVENT_ADDED,
    payload: { id, type, dateTime, note, babyId },
});

export const deleteEvent = (id, babyId) => ({
    type: types.EVENT_DELETED,
    payload: {id, babyId}
});