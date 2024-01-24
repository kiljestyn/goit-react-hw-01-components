import css from "./transactionHistory.css";
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    const elemtnts = items.map(({ id, type, amount, currency }) => (
      <tr className={css.line} key={id} id={id}>
        <td className={css.cell}>{type}</td>
        <td className={css.cell}>{amount}</td>
        <td className={css.cell}>{currency}</td>
      </tr>
    ));
    return (
      <>
        <table className={css.transactionHistory}>
          <thead className={css.tableTitle}>
            <tr className={css.titleRow}>
              <th className={css.titleCell}>Type</th>
              <th className={css.titleCell}>Amount</th>
              <th className={css.titleCell}>Currency</th>
            </tr>
          </thead>
          <tbody className={css.titleBody}>{elemtnts}</tbody>
        </table>
      </>
    );
  };
  
  export default TransactionHistory;
  
  TransactionHistory.defaulProps = {
    items: [],
  };
  
  TransactionHistory.PropeTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.string,
      })
    ),
  };
