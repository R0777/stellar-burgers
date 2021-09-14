import reducer, { initialState, setBun, version, setTopMiddle, deleteMiddle, setTotal, resetStore, elementCounter, sortConstructor } from '../slices/constructor-element';

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


    const payload = {
      data: [{price:10, id: 1}, {price:11, id: 2}, {price:12, id: 3}],
      bun: [{price: 13, id: 4}]
    };

    const received = reducer(initialState, setTotal(payload));
    const expected = { ...initialState, idBasket: [4, 1, 2, 3], total: 46 }

    expect(received).toEqual(expected);
  });

  it('should properly reset store', () => {

    const received = reducer(initialState, resetStore());
    const expected = { ...initialState }

    expect(received).toEqual(expected);
  });

  it('should properly count elements', () => {

    const iniState = {
      middleElement: [{name:'a'}, {name: 'ab'}, {name:'abc'}, {name:'abc'}],
      bredElement: [{name: 'abcd'}]
    }

    const payload = 'abc';

    const received = reducer(iniState, elementCounter(payload));
    const expected = { ...iniState, elementAmount: 2 }

    expect(received).toEqual(expected);
  });

  it('should properly sort elements', () => {

    const iniState = {
      middleElement: [{ver:1234}, {ver:12345}, {ver:123}]
    }

    const payload = {
      item: {ver: 123456},
      props: {ver: 1234}
    };

    const received = reducer(iniState, sortConstructor(payload));
    const expected = { ...iniState, middleElement: [{ver:1234}, {ver:123456}, {ver:12345}, {ver:123}] }

    expect(received).toEqual(expected);
  });





});