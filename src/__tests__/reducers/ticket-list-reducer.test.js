import ticketListReducer from "../../reducers/ticketListReducer";

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
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
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
      type: 'DELETE_TICKET',
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

});