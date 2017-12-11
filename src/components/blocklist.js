import React from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBlocks } from '../actions/blocks';
import { unixTimeToHumanReadableTime } from '../utils/time';

class Home extends React.Component {
  componentDidMount() {
    const { fetchBlocks } = this.props;
    fetchBlocks();
  }

  render() {
    const { className, blockList, history } = this.props;

    return (
      <table className={classnames('table', className)}>
        <thead>
          <tr>
            <th></th>
            <th>Block Number</th>
            <th>Miner</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {
            blockList && blockList.map((block, index) => {
              return (
                <tr key={block.Number}>
                  <td>{ index }</td>
                  <td className="explorer-link" onClick={() => { history.push(`/blocks/${block.Number}`) }}>
                    <span>{parseInt(block.Number, 16)}</span>
                  </td>
                  <td className="explorer-link" onClick={() => { history.push(`/address/${block.Miner}`) }}>
                    <span>{block.Miner}</span>
                  </td>
                  <td>{ unixTimeToHumanReadableTime(parseInt(block.Timestamp.toString(), 16)) }</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  blockList: state.blocks.blockList
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBlocks,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home))
