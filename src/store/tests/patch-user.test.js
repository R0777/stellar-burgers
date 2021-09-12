import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { initialState, patchUserData } from '../slices/patch-user';

jest.mock('../slices/patch-user');

const mockStore = configureMockStore([thunk]);

describe('thunk', () => {

  it('should return the object', async () => {

    const requestPayload = {
      email: 'test@test.com',
      name: 'Blabla'
    };
    const responsePayload = {
      success: true,
      email: 'test@test.com',
      name: 'Blabla'
    };
    const store = mockStore(initialState);

    patchUserData.mockResolvedValueOnce(responsePayload);

    const response = await patchUserData(requestPayload);

    expect(response).toEqual(responsePayload);
  });
});