import React from 'react';
import { connect } from 'react-redux';

import { updateTime } from './actions';
import { getLatestTime } from './helpers';

const mapStateToProps = (store) => ({ ...store.timer });

const mapDispatchToProps = (dispatch) => ({
  updateTime: (time) => {
    dispatch(updateTime(time));
  },
});

class Timer extends React.Component {
  componentDidMount() {
    this.timeInterval = setInterval(() => {
      this.props.updateTime(getLatestTime());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    return <span>{this.props.time}</span>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
