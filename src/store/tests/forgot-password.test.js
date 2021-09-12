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
  });
});