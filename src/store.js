import 'rxjs';
import { combineReducers } from 'redux';
import { Store, Reducers, Actions } from 'sn-redux';
import { SetSiteUrl } from 'sn-client-js';
import { listByFilter } from './reducers/filtering'
import reduxMixinCreator from './reduxMixinCreator.js';

SetSiteUrl('https://demo06.demo.sensenet.com');

const collection = Reducers.collection;
const myReducer = combineReducers({
  collection,
  listByFilter
});

const store = Store.configureStore(myReducer);

export default reduxMixinCreator(store, Actions);