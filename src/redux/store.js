import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/allReducers';
import thunk from 'redux-thunk';

export default function store() {
  return createStore(
    reducers, //coloco los reducers en el store
    applyMiddleware(thunk)
  );
}
