import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { unixTimeToHumanReadableTime } from '../utils/time';
import { toBither } from '../utils/number';
import { sliceString } from '../utils/string';


export default withRouter(function(props) {
  const { className, transactionList, history } = props;

  return (
    <table className={classnames('table', className)}>
      <thead>
        <tr>
          <th></th>
          <th>Hash</th>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {
          transactionList && transactionList.map((transaction, index) => {
            return (
              <tr key={transaction.Hash}>
                <td>{ index }</td>
                <td className="explorer-link"
                  onClick={() => { history.push(`/transaction/${transaction.Hash}`) }}
                >
                  {sliceString(transaction.Hash)}
                </td>
                <td
                  className="explorer-link" title={transaction.From}
                  onClick={() => { history.push(`/address/${transaction.From}`) }}
                >
                  {sliceString(transaction.From)}
                </td>
                <td className="explorer-link" title={transaction.To} onClick={() => { history.push(`/address/${transaction.To}`) }}>
                  {sliceString(transaction.To)}
                </td>
                <td>
                  <span>{toBither(parseInt(transaction.Value, 16))}</span>
                </td>
                <td>{ unixTimeToHumanReadableTime(parseInt(transaction.Timestamp.toString(), 16)) }</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
})
