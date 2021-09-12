import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { initialState, getUserData } from '../slices/get-user';

jest.mock('../slices/get-user');

const mockStore = configureMockStore([thunk]);

describe('thunk', () => {

  it('should return obj', async () => {

    const payload = {
      user: {email: "abs@abs.ru", name: "test"}
    };
    const store = mockStore(initialState);

    getUserData.mockResolvedValueOnce(payload);

    const recived = await getUserData();

    expect(payload).toEqual(recived);
  });

});