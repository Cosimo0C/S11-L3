//primo reduce deve essere funziona pura e prende lo stato attuale

import { act } from "react";

//si crea uno stato iniziale  per il primo avvio
const inizialState = {
  preferiti: {
    companies: [],
  },
};
const mainReducer = (state = inizialState, action) => {
  // qua in ogni caso va ritornato un nuovo oggetto di stato
  switch (action.type) {
    case "PREFERITO":
      return {
        ...state,
        preferiti: {
          companies: [...state.preferiti.companies, action.payload],
        },
      };
    case "REMOVE-LIST":
      return {
        ...state,
        companies: state.preferiti.companies.filter((comp) => comp.id !== action.payload),
      };
    default:
      console.log("default");
      return state;
  }
};
export default mainReducer;
