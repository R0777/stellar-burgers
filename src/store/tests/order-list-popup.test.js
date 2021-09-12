import reducer, { initialState, wsConnectionOpened, wsGetMessage, wsConnectionClose, wsConnectionError, ordersListPopupToggle, profileOrderPopupToggle, setOrder } from '../slices/order-list-popup';

describe('reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {

    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it('should properly change state', () => {

    const payload = true;
    const expected = { ...initialState, ordersListPopup: payload };
    const received = reducer(initialState, ordersListPopupToggle(payload));

    expect(received).toEqual(expected);
  });

  it('should properly change other state', () => {

    const payload = true;
    const expected = { ...initialState, profileOrderPopup: payload };
    const received = reducer(initialState, profileOrderPopupToggle(payload));

    expect(received).toEqual(expected);
  });

  it('should properly set order', () => {

    const payload = {_id: 123, name: 'wtf'};
    const expected = { ...initialState, order: payload };
    const received = reducer(initialState, setOrder(payload));

    expect(received).toEqual(expected);
  });

  it('should properly set state of ws connection', () => {

    const payload = true;
    const expected = { ...initialState, connected: payload, error: false };
    const received = reducer(initialState, wsConnectionOpened(payload));

    expect(received).toEqual(expected);
  });

  it('should set ws message', () => {

    const payload = {orders: 123, total: 1234, totalToday: 25};
    const expected = { ...initialState, orders: payload.orders, total: payload.total, dailyTotal: payload.totalToday};
    const received = reducer(initialState, wsGetMessage(payload));

    expect(received).toEqual(expected);
  });

  it('should properly close ws', () => {

    const payload = false;
    const expected = { ...initialState, connected: payload, error: false };
    const received = reducer(initialState, wsConnectionClose(payload));

    expect(received).toEqual(expected);
  });

  it('should properly set ws error', () => {

    const payload = true;
    const expected = { ...initialState, error: payload };
    const received = reducer(initialState, wsConnectionError(payload));

    expect(received).toEqual(expected);
  });
});