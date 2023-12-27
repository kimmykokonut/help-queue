// import { act } from "react-dom/test-utils/index.js";
import ticketListReducer from "../../reducers/ticket-list-reducer.js";
import * as c from './../../actions/ActionTypes.js';
import { format, formatDistanceToNow } from "date-fns";

describe('ticketListReducer', () => {
  let action;

  const currentState = {
    1: {
      names: 'Kim & Matt',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1
    }, 2: {
      names: 'Tegan & Sara',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2
    }
  }
  const ticketData = {
    names: 'Kim & Matt',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    timeOpen: new Date(),
    formattedWaitTime: formatDistanceToNow(new Date(), {
      addSuffix: true,
    }),
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: c.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      id: id
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: c.DELETE_TICKET,
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: 'Tegan & Sara',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2
      }
    });
  });

  test('Should successfully update an existing ticket', () => {

    action = {
      type: c.ADD_TICKET,
      names: 'Kim & Matt',
      location: 'Richmond',
      issue: 'not working',
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      1: {
        names: 'Kim & Matt',
        location: 'Richmond',
        issue: 'not working',
        id: 1
      }, 2: {
        names: 'Tegan & Sara',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2
      }
    });
  });
  test('Should add a formatted wait time to ticket entry', () => {
    const { names, location, issue, timeOpen, id } = ticketData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes ago',
      id: id
    };
    expect(ticketListReducer({ [id]: ticketData }, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes ago'
      }
    });
  });
});