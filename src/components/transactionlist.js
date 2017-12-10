import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { unixTimeToHumanReadableTime } from '../utils/time';
import { toBither } from '../utils/number';
import { currency } from '../constants/numbers';


export default withRouter(function(props) {
  const { className, transactionList, history } = props;

  return (
    <table className={classnames('table', className)}>
      <thead>
        <tr>
          <th></th>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
          <th>Time</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody>
        {
          transactionList && transactionList.map((transaction, index) => {
            return (
              <tr key={transaction.Hash}>
                <td>{ index }</td>
                <td>{transaction.From}</td>
                <td>{transaction.To}</td>
                <td onClick={() => { history.push(`/blocks/${transaction.Hash}`) }}>
                  <span>{toBither(parseInt(transaction.Value, 16))}</span>
                </td>
                <td>{ unixTimeToHumanReadableTime(parseInt(transaction.Timestamp.toString(), 16)) }</td>
                <td>{transaction.Hash}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
})
