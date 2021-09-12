import reducer, { initialState, orderPopupToggle, setOrderNumer } from '../slices/order-popup';

describe('reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {

    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it('should properly toggle state', () => {

    const payload = true;
    const expected = { ...initialState, togglePopup: payload };
    const received = reducer(initialState, orderPopupToggle(payload));

    expect(received).toEqual(expected);
  });

  it('should properly set number', () => {

    const payload = 1324;
    const expected = { ...initialState, orderId: payload };
    const received = reducer(initialState, setOrderNumer(payload));

    expect(received).toEqual(expected);
  });
});