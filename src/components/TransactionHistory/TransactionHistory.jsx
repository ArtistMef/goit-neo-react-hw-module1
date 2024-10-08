import TransHistoryCss from "./TransactionHistory.module.css";
import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead className={TransHistoryCss.table}>
        <tr className={TransHistoryCss.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={TransHistoryCss.bodyTransaction}>
        {items.map((transaction) => (
          <TransactionHistoryItem
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
