import React, { Component } from 'react';
import { object } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { APP_ROUTES } from '../../config/appConstants';
import './style.css';

const mapStateToProps = (store) => ({ ...store.timer });

class Dashboard extends Component {
  onClick = () => {
    this.props.history.push(APP_ROUTES.CONTACTS);
  };

  render() {
    const { time } = this.props;
    return (
      <div className="dashboard" onClick={this.onClick}>
        <p className="time">{time}</p>
      </div>
    );
  }
}

Dashboard.propTypes = {
  history: object.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Dashboard)
);
