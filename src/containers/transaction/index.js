import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTransaction } from '../../actions/blocks';
import List from '../../components/list';
import transactionToView  from '../../transformers/transaction_to_view';

class Transaction extends Component {

  state = {
    transaction: null
  }

  componentDidMount() {
    const { fetchTransaction } = this.props;
    const { hash } = this.props.match.params;
    fetchTransaction(hash).then(response => {
      this.setState({ transaction: response });
    });
  }

  render() {
    const { transaction } = this.state;

    return (
      <div className="container p-blocks">
        <h1>Transaction</h1>
        <hr />
        {
          transaction &&
          <List list={transactionToView(transaction)} className="p-blocks-table" />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTransaction,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transaction);
