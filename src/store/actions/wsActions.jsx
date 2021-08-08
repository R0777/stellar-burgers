import { createAction } from '@reduxjs/toolkit'

export const WS_CONNECTION_START = createAction("WS_CONNECTION_START");
export const WS_CONNECTION_CLOSE = createAction("WS_CONNECTION_CLOSE");
export const WS_CONNECTION_ERROR = createAction("WS_CONNECTION_ERROR");
export const WS_CONNECTION_SUCCESS = createAction("WS_CONNECTION_SUCCESS");
export const WS_CONNECTION_MESSAGE = createAction("WS_CONNECTION_MESSAGE");
export const WS_CONNECTION_SEND_MESSAGE = createAction("WS_CONNECTION_SEND_MESSAGE");