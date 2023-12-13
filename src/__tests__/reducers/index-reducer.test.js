import rootReducer from '../../reducers/index.js';
import { legacy_createStore as createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/ticket-list-reducer';
import * as c from './../../actions/ActionTypes.js';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, { type: null}));
  });
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null}));
  });

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      mainTicketList: {},
      formVisibleOnPage: false 
    });
  });

  test('Check that ADD_TICKET action works for ticketListReducer and root reducer', () => {
    const action = {
      type: c.ADD_TICKET,
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.', 
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, action));
  });
  // //these tests dispatch an action. rootred shoudl handle the actions by passing into ind. reducers and update state slice
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});