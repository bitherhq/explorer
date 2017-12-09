import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAddress } from '../../actions/blocks';
import List from '../../components/list';
import { toBither } from '../../utils/number';
import { currency } from '../../constants/numbers';

class Address extends Component {

  state = {
    balance: null
  }

  componentDidMount() {
    const { fetchAddress } = this.props;
    const { address } = this.props.match.params;

    fetchAddress(address).then(response => {
      this.setState({ balance: { Balance: `${toBither(response.balance)} ${currency}` } })
    });
  }

  render() {
    const { balance } = this.state;

    return (
      <div className="container p-blocks">
        <h1>Address Details</h1>
        <hr />
        {
          balance &&
          <List list={balance} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAddress,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
