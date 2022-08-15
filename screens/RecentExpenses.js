import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ErrorOverlay from "../components/ExpensesOutput/UI/ErrorOverlay";
import LoadingOverlay from "../components/ExpensesOutput/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("data gelemedi yau");
        //errorMessage
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  function errorHandler(params) {
    setError(null);
  }

  // if (error && !isFetching) {
  //   return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  // }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbacktext="Harcama yapmamışsın aferimm"
    />
  );
}
export default RecentExpenses;
