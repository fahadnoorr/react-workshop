import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {startTime, stopTime, updateTime} from './actions'

const mapStateToProps = (store) => {
    return {...store.timer};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            startTime,
            stopTime,
            updateTime,
        },
        dispatch
    );
};

class ConnectedTimer extends React.Component{

    constructor(props){
        super(props);

        this.timeInterval = null;
    }


    componentWillReceiveProps(nextProps){
        let {active, updateTime} = nextProps;
        if (active){
            this.timeInterval = setInterval(() => {
                updateTime(new Date().toLocaleTimeString());
            }, 1000);
        } else {
            clearInterval(this.timeInterval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }


    render() {

        let {time, active, startTime, stopTime} = this.props;
        let handleClick = active ? stopTime : startTime;

        return (
            <div>
                <span>{active ? time : 'Start Timer'}</span>&nbsp;&nbsp;
                <button onClick={handleClick}>
                    {active ? 'Stop' : 'Start'}
                </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedTimer)

