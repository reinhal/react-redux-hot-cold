import {createStore} from 'redux';
import {gameReducer} from './reducers/index.js';
export default createStore(gameReducer);