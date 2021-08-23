import reducer, { initialState, setBun, version, setTopMiddle, deleteMiddle, setTotal, resetStore, elementCounter, sortConstructor, bredElement, middleElement, elementAmount, total, idBasket } from '../slices/constructor-element';

describe('reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {

    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it('should properly generte id and splice new element in bredElement array', () => {
    const payload = { ver: version };
    const received = reducer(initialState, setBun(payload));
    const expected = { ...initialState, bredElement: [payload] }

    expect(received).toEqual(expected);
  });

  it('should properly generte id and splice new element in middleElement array', () => {
    const payload = {};
    const received = reducer(initialState, setTopMiddle(payload));
    const expected = { ...initialState, middleElement: [payload] }

    expect(received).toEqual(expected);
  });

  it('should properly delete elem and return new array', () => {

    const iniState = {
      middleElement: [{ver:123}, {ver:1234}, {ver:12345}]
    }

    const payload = 123;
    const received = reducer(iniState, deleteMiddle(payload));
    const expected = { ...iniState, middleElement: [{ver:1234}, {ver:12345}] }

    expect(received).toEqual(expected);
  });

  it('should properly sum elem price + add id to array', () => {

    // const iniState = {
    //   data: [{price:10}, {price:11}, {price:12}]
    // }

    const payload = {
      data: [{price:10}, {price:11}, {price:12}],
      bun: [{price: 13}]
    };
    const received = reducer(initialState, setTopMiddle(payload));
    const expected = { ...initialState, middleElement: [payload] }

    expect(received).toEqual(expected);
  });









});