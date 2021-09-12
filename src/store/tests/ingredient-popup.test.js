import reducer, { initialState, ingredientPopupToggle, setIngredient } from '../slices/ingredient-popup';

describe('reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {

    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it('should properly set the state', () => {

    const payload = {_id: 123, name: 'food'};
    const expected = { ...initialState, ingredient: payload };
    const received = reducer(initialState, setIngredient(payload));

    expect(received).toEqual(expected);
  });

  it('should properly change state', () => {

    const payload = true;
    const expected = { ...initialState, ingredientPopup: payload };
    const received = reducer(initialState, ingredientPopupToggle(payload));

    expect(received).toEqual(expected);
  });
});