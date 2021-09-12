import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { initialState, resetPass } from '../slices/reset-password';

jest.mock('../slices/reset-password');

const mockStore = configureMockStore([thunk]);

describe('thunk', () => {

  it('should return the object', async () => {

    const requestPayload = {
      password: 1234,
      token: 456162
    };
    const responsePayload = {
      success: true,
      message: "Reset password"
    };
    const store = mockStore(initialState);

    resetPass.mockResolvedValueOnce(responsePayload);

    const response = await resetPass(requestPayload);

    expect(response).toEqual(responsePayload);
  });
});