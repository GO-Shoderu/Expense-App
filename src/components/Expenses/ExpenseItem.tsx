import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

import { useState } from "react";

const ExpenseItem = (props: { date: any; title: string; amount: number }) => {
  let changeTitle = true;

  const [title, setChangeTitle] = useState(changeTitle);

  const titleHandler = () => {
    setChangeTitle(!title);
    console.log(changeTitle);
  };

  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          {title ? <h2>{props.title}</h2> : <h2>No Title!!!</h2>}
          <div className="expense-item__price">${props.amount}</div>
        </div>

        {/* <button onClick={titleHandler}>Change Title</button> */}
      </Card>
    </div>
  );
};

export default ExpenseItem;
