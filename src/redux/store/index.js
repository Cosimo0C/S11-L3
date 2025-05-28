import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
// crea redux store all'avvio

//lo crea grazie al fatto che è preconfigurata per ritornare l'oggetto store
const store = configureStore({
  reducer: mainReducer,
});
export default store;
