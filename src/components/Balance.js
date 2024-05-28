import React from "react";
import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // handle getting total balance
  //  first we need the amounts
  const amounts = transactions.map((transaction) => transaction.amount);

  //then we need the total by using reduce() to add all of them together
  //  and toFixed to maintain the decimal
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};
