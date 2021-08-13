import bunReducer, { initialState, getBun, bunsArray } from '../slices/get-bun';

describe('reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {

    const nextState = initialState;
    const result = bunReducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it('should properly set the state when added buns', () => {

    const payload = [{}, {}];
    const reducer = bunReducer(initialState, getBun(payload));
    const result = { ...initialState, buns: payload };
    expect(reducer).toEqual(result);
  });
});