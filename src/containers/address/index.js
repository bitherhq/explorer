import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import QRCode from 'qrcode.react'
import { connect } from 'react-redux';
import { fetchAddress } from '../../actions/blocks';
import List from '../../components/list';
import { toBither } from '../../utils/number';
import { currency } from '../../constants/numbers';

class Address extends Component {

  state = {
    balance: null,
    'USD Value': null
  }

  componentDidMount() {
    const { fetchAddress } = this.props;
    const { address } = this.props.match.params;

    fetchAddress(address).then(response => {
      this.setState({
        balance: { Balance: `${toBither(response.balance)} ${currency}` },
        'USD Value': 'empty'
      })
    });
  }

  render() {
    const { balance } = this.state;
    const { address } = this.props.match.params;

    return (
      <div className="container p-blocks">
        <h1>Address Details</h1>
        <div className="columns">
          <div className="column is-three-quarters">
            {
              balance &&
              <List list={{ ...balance }} />
            }
          </div>
          <div className="column text-center">
            <QRCode
              value={address}
              size={128}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"L"}
            />
          </div>
        </div>
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
