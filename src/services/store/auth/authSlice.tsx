import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api/auth";
import { setCookie } from "../../utils/cookie";

export type TUserData = {
  email: string;
  name: string;
};
type TLoginUserResponse = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: TUserData;
  message?: string;
};

type TPatchUserResponse = {
  success: boolean;
  user: TUserData;
};

export type TLoginUserParams = {
  email: string;
  password: string;
};

export type TRegisterUserParams = {
  email: string;
  password: string;
  name: string;
};


export const loginUser = createAsyncThunk<TLoginUserResponse, TLoginUserParams>(
  "auth/loginUser",
  async (form) => {
      const data = await authAPI.loginUser(form);
      setCookie("token", data.accessToken, { expires: 1200 });
      localStorage.setItem("refreshToken", data.refreshToken);
      return data;
  }
);

export const registerUser = createAsyncThunk<
  TLoginUserResponse,
  TRegisterUserParams
>("auth/registerUser", async (form) => {

    const data = await authAPI.registerUser(form);
    setCookie("token", data.accessToken, { expires: 1200 });
    localStorage.setItem("refreshToken", data.refreshToken);
    return data;
});

export const patchUser = createAsyncThunk<
  TPatchUserResponse,
  TRegisterUserParams
>("auth/patchUser", async (form) => {
    return await authAPI.patchAuthUser(form);
});
export const getUser = createAsyncThunk("auth/getUser", async () => {
    const res = await authAPI.getAuthUser();
    return res;
});

export const initialState = { userData: {} as TUserData };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.userData = action.payload.user;
      }
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.payload) {
      console.log(`err.message`, action.payload);
      }
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.userData = action.payload.user;
      }
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      if (action.payload) {
      console.log(`err.message`, action.payload);
      }
    });
    builder.addCase(patchUser.fulfilled, (state, action) => {
      state.userData = action.payload.user;
    })
    builder.addCase(patchUser.rejected, (state, action) => {
      if (action.payload) {
      console.log(`err.message`, action.payload);
      }
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.userData = action.payload.user;
      }
    })
    builder.addCase(getUser.rejected, (state, action) => {
      if (action.payload) {
      console.log(`err.message`, action.payload);
      }
    });
  },
});
export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
