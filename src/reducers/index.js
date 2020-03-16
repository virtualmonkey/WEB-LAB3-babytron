import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import baby, * as babySelectors from './baby'
import event, * as eventSelectors from './event'

const reducer = combineReducers({
    baby,
    event,
    form: formReducer
});
export default reducer;

export const getBaby = (state, id) => babySelectors.getBaby(state.baby, id);
export const getBabies = (state) => babySelectors.getBabies(state.baby);
export const getBabyByOrder = (state, index) => babySelectors.getBabyByOrder(state.baby,index);
export const getBabiesCount = state => babySelectors.getBabiesCount(state.baby);
export const getSelectedBaby = state => babySelectors.getSelectedBaby(state.baby);

export const getEvent = (state,id) => eventSelectors.getEvent(state.event,id);
export const getEventListByBabyId = (state, babyId) => eventSelectors.getEventListByBabyId(state.event,babyId);





