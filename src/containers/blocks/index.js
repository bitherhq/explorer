import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBlock } from '../../actions/blocks';
import List from '../../components/list';
import blockToView  from '../../transformers/block_to_view';

class Blocks extends Component {

  componentDidMount() {
    const { fetchBlock } = this.props;
    const { blocknumber } = this.props.match.params;

    fetchBlock(blocknumber);
  }

  render() {
    const { blocks, match } = this.props;
    const { blocknumber } = match.params;
    const block = blocks[blocknumber];
    console.log('block', block)
    return (
      <div className="container p-blocks">
        <h1>Block Details</h1>
        <hr />
        {
          block &&
          <List list={blockToView(block)} className="p-blocks-table" />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blocks: state.blocks.blocks
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBlock,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blocks);
