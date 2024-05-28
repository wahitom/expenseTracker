// Reducer
// reducers are a way to change a state and send it down to the components

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        // current state
        ...state,
        // send down all the transations except the deleted one
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        //  new transaction and the payload
        //  here we are updating coz we are sending the entire transaction object
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
