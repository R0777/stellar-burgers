import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { initialState, setOrderInfo, getOrderDetails } from '../slices/get-order-details';

jest.mock('../slices/get-order-details');

const mockStore = configureMockStore([thunk]);

describe('thunk', () => {

  it('should return obj', async () => {

    const responsePayload = {
      orders: [{ _id: 123, number: 456, ingredients: [] }, {}, {}]
    };
    const store = mockStore(initialState);

    getOrderDetails.mockResolvedValueOnce(responsePayload);

    const recived = await getOrderDetails();

    expect(responsePayload).toEqual(recived);
  });

  it('should set obj to store', () => {

    const payload = {_id: 123, number: 456, ingredients: [] };

    const expected = { ...initialState, order: payload };

    const received = reducer(initialState, setOrderInfo(payload));

    expect(received).toEqual(expected);
  });

});