import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BlocksTable from '../../components/blocklist';
import TransactionsTable from '../../components/transactionlist';
import Searchbar from '../../components/searchbar';
import { fetchNetworkState, fetchLatestTransactions } from '../../actions/blocks';

class Home extends Component {

  componentDidMount() {
    const { fetchNetworkState, fetchLatestTransactions } = this.props;
    fetchNetworkState();
    fetchLatestTransactions();
  }

  render() {
    const { networkState, latesetTransactions } = this.props;

    return (
      <div className="container p-home">
        <div className="explorer-card">
          <Searchbar className="p-home-searchbar" />
        </div>
        <div className="p-home-networkstates">
          <div className="p-home-networkstate">
            <p><i className="fa fa-4x fa-clock-o" aria-hidden="true"></i></p>
            BlockTime: {networkState.BlockTime}
          </div>
          <div className="p-home-networkstate">
            <p><i className="fa fa-4x fa-warning" aria-hidden="true"></i></p>
            Difficulty: {networkState.Difficulty}
          </div>
          <div className="p-home-networkstate">
            <p><i className="fa fa-4x fa-globe" aria-hidden="true"></i></p>
            Hashrate: {networkState.Hashrate}
          </div>
          <div className="p-home-networkstate">
            <p><i className="fa fa-4x fa-exchange" aria-hidden="true"></i></p>
            Transactions: {networkState.Transactions}
          </div>
        </div>
        <h1 className="p-home-title">Latest Transactions</h1>
        <hr />
        {
          latesetTransactions &&
          <div className="p-home-transactionTable">
            <TransactionsTable transactionList={latesetTransactions} />
          </div>
        }
        <h1 className="p-home-title">Latest Blocks</h1>
        <hr />
        <BlocksTable className="p-home-blockList" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  networkState: state.network.networkState,
  latesetTransactions: state.network.latesetTransactions
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNetworkState,
  fetchLatestTransactions
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
