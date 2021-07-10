import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const date = new Date();
const dtf = Intl.DateTimeFormat(undefined, { timeZoneName: "long" });
const result = dtf
  .formatToParts(date)
  .find((part) => part.type === "timeZoneName").value;

const initialState = {
  bookDate: date,
  bookTime: "",
  timeZone: result,
  confirmStatus: false,
};

export const store = createContext(initialState);

export const ApplicationContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (state) => state);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};

export const useDispatch = () => {
  const value = useContext(store);
  return value.dispatch;
};

export const useSelector = (selectorFn) => {
  const value = useContext(store);
  return selectorFn(value.state);
};
