import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import baby, * as babySelectors from './baby'
import event, * as eventSelectors from './event'
import babyToEvents, * as babyToEventsSelectors from './babyToEvents'

const reducer = combineReducers({
    baby,
    event,
    babyToEvents,
    form: formReducer
});
export default reducer;

export const getBaby = (state, id) => babySelectors.getBaby(state.baby, id);
export const getBabies = (state) => babySelectors.getBabies(state.baby);
export const getBabyByOrder = (state, index) => babySelectors.getBabyByOrder(state.baby,index);
export const getBabiesCount = state => babySelectors.getBabiesCount(state.baby);
export const getSelectedBaby = state => babySelectors.getSelectedBaby(state.baby);

export const getEvent = (state,id) => eventSelectors.getEvent(state.event,id);

export const getEventListByBabyId = (state, babyId) => babyToEventsSelectors.getEventListByBabyId(state.babyToEvents,babyId);





