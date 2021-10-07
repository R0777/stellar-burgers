import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";


export const useDispatch = () => dispatchHook();
export const useSelector = selectorHook;
