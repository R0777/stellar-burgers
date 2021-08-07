import { WS_CONNECTION_CLOSE, WS_CONNECTION_START} from "../actions/wsActions";
import { wsConnectionClose, wsGetMessage, wsConnectionError, wsConnectionOpened } from "../slices/order-list-popup";

export const socketMiddleware = () => {
  return ({ dispatch }) => {
    let socket = null;

    return (next) => (action) => {
      const { type, payload } = action;

      if (type === WS_CONNECTION_START.toString())
      socket = new WebSocket(payload);


      if (type === WS_CONNECTION_CLOSE.toString()) socket.close();

      if (socket) {
        socket.onopen = () => dispatch(wsConnectionOpened());
        socket.onclose = () => dispatch(wsConnectionClose());
        socket.onerror = (event) => dispatch(wsConnectionError(event));
        socket.onmessage = (event) =>
          dispatch(wsGetMessage(JSON.parse(event.data)));
      }

      next(action);
    };
  };
};