import reducer, { initialState, setRegisterUserData, userRegister, setRegisterAccessToken, setRegisterRefreshToken } from '../slices/register';

describe('reducer, actions and selectors', () => {
  it('should return the initial state on first run', () => {

    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });


  it('should rewright refreshToken and put it in state', () => {

    const payload = 87986546512;

    const expected = { ...initialState, refreshToken: payload };

    const received = reducer(initialState, setRegisterRefreshToken(payload));

    expect(expected).toEqual(received);
  });

  it('should rewright accessToken and put it in state', () => {

    const payload = 'Bearer 87986546512';

    const expected = { ...initialState, accessToken: '87986546512'};

    const received = reducer(initialState, setRegisterAccessToken(payload));

    expect(expected).toEqual(received);
  });

  it('should set user data and put it in state', () => {

    const payload = {email: "test@test.ru", name: "test"};

    const expected = { ...initialState, userData: payload };

    const received = reducer(initialState, setRegisterUserData(payload));

    expect(expected).toEqual(received);
  });

});