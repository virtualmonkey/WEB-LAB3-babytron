import * as types from '../types/babyToEvents';

export const addEventToBaby = (babyId, eventId) => ({
    type: types.ADDED_EVENT_TO_BABY,
    payload: { babyId: babyId, eventid: eventId},
});

export const deletedEventFromBaby = (babyId, eventId) => ({
    type: types.DELETED_EVENT_FROM_BABY,
    payload: { babyId: babyId, eventid: eventId},
});