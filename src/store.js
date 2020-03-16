/* createStore allows us to create a store with a given reducer and a middleware*/
import { createStore, applyMiddleware } from 'redux';

/* createLogger allows us to control the redux actions in the console */
import { createLogger } from 'redux-logger';

// thunkMiddleware allows us to control  redux Async actions and manage them
//import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

/* intance of the logger */
const logger = createLogger();

// The store A.K.A. the state of the app is declared with the root reducer, and as
// an optional second parameter we can pass a middleware, to keep track of the actions

export const configureStore = () => {
  return createStore(reducer,  applyMiddleware(logger));
}
