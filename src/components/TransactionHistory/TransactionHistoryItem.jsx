import transactionItemCss from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = ({ transaction }) => {
  return (
    <tr className={transactionItemCss.row}>
      <td className={transactionItemCss.rowItem}>{transaction.type}</td>
      <td className={transactionItemCss.rowItem}>{transaction.amount}</td>
      <td className={transactionItemCss.rowItem}>{transaction.currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
