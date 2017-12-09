import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BlocksTable from '../../components/blocklist';
import { fetchNetworkState } from '../../actions/blocks';

class Home extends Component {

  componentDidMount() {
    const { fetchNetworkState } = this.props;
    fetchNetworkState();
  }

  render() {
    const { networkState } = this.props;
    return (
      <div className="container p-home">
        <div className="p-home-networkstates">
          <div className="p-home-networkstate">BlockTime: {networkState.BlockTime}</div>
          <div className="p-home-networkstate">Difficulty: {networkState.Difficulty}</div>
          <div className="p-home-networkstate">Hashrate: {networkState.Hashrate}</div>
          <div className="p-home-networkstate">Transactions: {networkState.Transactions}</div>
        </div>
        <h1 className="p-home-title">Latest Blocks</h1>
        <hr />
        <BlocksTable className="p-home-blockList" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  networkState: state.network.networkState
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNetworkState
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
