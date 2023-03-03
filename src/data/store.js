import {createStore} from 'redux';
import reducerLoginChange from './reducer';
 
 const store = createStore(reducerLoginChange);
 export default store;