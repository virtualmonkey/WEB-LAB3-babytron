import * as types from '../types/event';

export const addEvent = (id, type, dateTime, note) => ({
    type: types.EVENT_ADDED,
    payload: { id, type, dateTime, note },
});

export const deleteEvent = (id) => ({
    type: types.EVENT_DELETED,
    payload: id,
});