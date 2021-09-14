import reducer, { initialState, logoutState } from '../slices/login';

describe('reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {

    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it('should reset store', () => {

    const expected = { ...initialState };
    const received = reducer(initialState, logoutState());

    expect(received).toEqual(expected);
  });
});