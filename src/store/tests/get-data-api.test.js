import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { initialState, getData } from '../slices/get-data-api';

jest.mock('../slices/get-data-api');

const mockStore = configureMockStore([thunk]);

describe('thunk', () => {

  it('should return the Array with obj', async () => {

    const responsePayload = [{}, {}, {}];

    const store = mockStore(initialState);

    getData.mockResolvedValueOnce(responsePayload);

    const response = await getData();

    expect(response).toEqual(responsePayload);
  });
});