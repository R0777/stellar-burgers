// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import reducer, { initialState, setLoginUserData, setLoginAccessToken, setLoginRefreshToken, setLogin, userLogin } from '../slices/login';

describe('reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {

    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it('should set login', () => {

    const payload = true;

    const expected = { ...initialState, login: payload };

    const received = reducer(initialState, setLogin(payload));

    expect(expected).toEqual(received);
  });

  it('should rewright refreshToken and put it in state', () => {

    const payload = 87986546512;

    const expected = { ...initialState, refreshToken: payload };

    const received = reducer(initialState, setLoginRefreshToken(payload));

    expect(expected).toEqual(received);
  });

  it('should rewright accessToken and put it in state', () => {

    const payload = 'Bearer 87986546512';

    const expected = { ...initialState, accessToken: '87986546512'};

    const received = reducer(initialState, setLoginAccessToken(payload));

    expect(expected).toEqual(received);
  });

  it('should set user data and put it in state', () => {

    const payload = {email: "test@test.ru", name: "test"};

    const expected = { ...initialState, userData: payload };

    const received = reducer(initialState, setLoginUserData(payload));

    expect(expected).toEqual(received);
  });

});


// jest.mock('../slices/login');

// const mockStore = configureMockStore([thunk]);

// describe('thunk', () => {

//   it('should return obj', async () => {

//     const requestPayload = {
//       email: 'test@test.com',
//       password: 1234
//     };
//     const responsePayload = {
//       user: {email: "test@test.ru", name: "test"}
//     };

//     const store = mockStore(initialState);

//     userLogin.mockResolvedValueOnce(responsePayload);

//     const recived = await userLogin(requestPayload);

//     expect(responsePayload).toEqual(recived);
//   });


// });