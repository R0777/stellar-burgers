import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { initialState, setOrderInfo } from '../slices/get-order-details';

jest.mock('../slices/get-order-details');

const mockStore = configureMockStore([thunk]);

describe('thunk', () => {

  it('should set orderNumber to obj', async () => {

    const responsePayload = {
      orders: [{ 1: 123, 2: 456, 3: 789 }, {}, {}]
    };
    const store = mockStore(initialState);

    forgotPass.mockResolvedValueOnce(responsePayload);

    const response = await forgotPass(requestPayload);

    expect(response).toEqual(responsePayload);
  });

});