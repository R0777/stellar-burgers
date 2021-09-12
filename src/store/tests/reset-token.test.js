import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { initialState, resetToken } from '../slices/reset-token';

jest.mock('../slices/reset-token');

const mockStore = configureMockStore([thunk]);

describe('thunk', () => {

  it('should return the object', async () => {

    const requestPayload = {
      token: 1234
    };
    const responsePayload = {
      accessToken: 65456874616,
      refreshToken: 6865454654
    };
    const store = mockStore(initialState);

    resetToken.mockResolvedValueOnce(responsePayload);

    const response = await resetToken(requestPayload);

    expect(response).toEqual(responsePayload);
  });
});