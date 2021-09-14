import bunReducer, { initialState, getBun } from '../slices/get-bun';

describe('reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {

    const nextState = initialState;
    const result = bunReducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it('should properly set the state when added buns', () => {

    const payload = [{}, {}];
    const expected = { ...initialState, buns: payload };
    const received = bunReducer(initialState, getBun(payload));

    expect(received).toEqual(expected);
  });
});