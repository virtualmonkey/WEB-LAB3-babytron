import * as types from '../types/baby';

export const addBaby = (id, name, lastName) => ({
    type: types.BABY_ADDED,
    payload: { id, name, lastName },
});