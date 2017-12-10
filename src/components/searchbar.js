import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { unixTimeToHumanReadableTime } from '../utils/time';
import { toBither } from '../utils/number';
import { currency } from '../constants/numbers';


export default withRouter(class extends Component {

  handleSearch = () => {
    if (this.input.value) {
      const { history } = this.props;
      const value = this.input.value;
      if (value.indexOf('0x') > -1) {
        value.length > 45 ? history.push(`/transaction/${value}`) : history.push(`/address/${value}`);      
      } else {
        history.push(`/blocks/0x${parseInt(value).toString(16)}`);
      }
    }
  }

  render() {
    const { className } = this.props;
    
      return (
        <div className={classnames('field has-addons', className)}>
          <div className="control is-expanded">
            <input 
              onKeyDown={(e) => { e.keyCode === 13 && this.handleSearch(); }}
              ref={(input) => this.input = input}
              className="input is-large is-fullwidth"
              type="text"
              placeholder="block number, transaction or address" 
            />
          </div>
          <div className="control">
            <a
              className="button is-info is-large"
              onClick={this.handleSearch}
            >
              Search
            </a>
          </div>
        </div>
      );
  }
});
