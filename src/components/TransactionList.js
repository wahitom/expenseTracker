import React from "react";

// import GlobalContext
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

// import transaction component
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  //  use some destructuring to have access to trnsactions from
  //  GlobalState directly
  // these are then mapped onto our jsx
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
