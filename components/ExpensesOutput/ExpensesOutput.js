import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 56.88,
    date: new Date("2021-12-4"),
  },
  {
    id: "e2",
    description: "A pair of tshirts",
    amount: 23.8,
    date: new Date("2022-11-5"),
  },
  {
    id: "e3",
    description: "A pair of book",
    amount: 12.88,
    date: new Date("2012-3-5"),
  },
  {
    id: "e4",
    description: "A pair of pencils",
    amount: 67.88,
    date: new Date("2005-2-9"),
  },
  {
    id: "e5",
    description: "A pair of bottles",
    amount: 99.8,
    date: new Date("2012-6-6"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
export default ExpensesOutput;
