import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create the context using createContext
export const GlobalContext = createContext(initialState);

//

// Provider Component
// this is a provier so that our other components have access to our state
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  // Actions function that are going to make calls to our reducer ie AppReducer
  // function that handles deleting transactions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      // here we are sending just the id
      payload: id,
    });
  }

  // function that handles adding transactions
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      // here we are sending the entire transaction object
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        // we can access this from any component using useContext
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {/* all our components */}
      {children}
    </GlobalContext.Provider>
  );
};
