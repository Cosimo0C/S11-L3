//primo reduce deve essere funziona pura e prende lo stato attuale
//si crea uno stato iniziale  per il primo avvio
const inizialState = {
  jobs: {
    work: [],
  },
};
const mainReducer = (state = inizialState, action) => {
  // qua in ogni caso va ritornato un nuovo oggetto di stato
  switch (action.type) {
    case " ":
    default:
      return state;
  }
};
export default mainReducer;
