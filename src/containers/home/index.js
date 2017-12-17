import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BlocksTable from '../../components/blocklist';
import TransactionsTable from '../../components/transactionlist';
import Searchbar from '../../components/searchbar';
import Footer from '../../components/footer';
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
      <div className="p-home">
        <div className="p-home-block">
          <div className="explorer-card container">
            <Searchbar className="p-home-searchbar" />
          </div>
        </div>

        <div className="p-home-block">
          <div className="container">
            <div className="columns">
              <div className="column p-home-networkstate">
                <p><i className="fa fa-4x fa-clock-o" aria-hidden="true"></i></p>
                <p>BlockTime: {networkState.BlockTime}</p>
              </div>
              <div className="column p-home-networkstate">
                <p><i className="fa fa-4x fa-warning" aria-hidden="true"></i></p>
                <p>Difficulty: {networkState.Difficulty}</p>
              </div>
              <div className="column p-home-networkstate">
                <p><i className="fa fa-4x fa-globe" aria-hidden="true"></i></p>
                <p>Hashrate: {networkState.Hashrate}</p>
              </div>
              <div className="column p-home-networkstate">
                <p><i className="fa fa-4x fa-exchange" aria-hidden="true"></i></p>
                <p>Transactions: {networkState.Transactions}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-home-block">
          <div className="container">
            <h1 className="p-home-title">Latest Transactions</h1>
            <hr />
            {
              latesetTransactions &&
              <div className="p-home-transactionTable">
                <TransactionsTable transactionList={latesetTransactions} />
              </div>
            }
          </div>
        </div>

        <div className="p-home-block">
          <div className="container">
            <h1 className="p-home-title">Latest Blocks</h1>
            <hr />
            <BlocksTable className="p-home-blockList" />
          </div>
        </div>
        <Footer />
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
