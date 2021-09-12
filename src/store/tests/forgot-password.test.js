<<<<<<< HEAD
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { initialState, forgotPass } from '../slices/forgot-password';

jest.mock('../slices/forgot-password');

const mockStore = configureMockStore([thunk]);

describe('thunk', () => {

  it('should return the object', async () => {

    const requestPayload = {
      email: 'test@test.com'
    };
    const responsePayload = {
      success: true,
      message: "Reset email sent"
    };
    const store = mockStore(initialState);

    forgotPass.mockResolvedValueOnce(responsePayload);

    const response = await forgotPass(requestPayload);

    expect(response).toEqual(responsePayload);
=======

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { initialState, setForgotPageVisit, forgotPass } from '../slices/forgot-password';

jest.mock('./forgot-password');

const mockStore = configureMockStore([thunk]);

describe('reducer, actions and selectors', () => {

  it('should return the initial state on first run', () => {

    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it('should properly start password reset', async () => {

    const requestPayload = {
      email: 'test@t.ru'
    };
    const responsePayload = {
      "success":true,
      "message":"Reset email sent"
    };



    const store = mockStore(initialState);
    jest.mock.mockResolvedValueOnce(responsePayload);

    const res = await store.dispatch(forgotPass(requestPayload));

    expect(responsePayload).toEqual(res);

    // const expectedActions = [signInStart(), signInSuccess(responsePayload)];
    //   expect(store.getActions()).toEqual(expectedActions);
    



    // const expectedActions = [signInStart(), signInSuccess(responsePayload)];
    //   expect(store.getActions()).toEqual(expectedActions);

    // const received = forgotPass('test@t.ru');
    // const expected = {"success":true,"message":"Reset email sent"};
    // expect(received).toEqual(expected);

  })

  it('should properly switch boolean', () => {
    const payload = true;
    const expected = { ...initialState, forgotPageVisit: true };
    const received = reducer(initialState, setForgotPageVisit(payload));

    expect(received).toEqual(expected);
>>>>>>> 20bd6fb427c5c0b78cea4512f6daf680f5d67eab
  });
});