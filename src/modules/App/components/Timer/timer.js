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

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    handleClick = () => {
        let {active, startTime, stopTime, updateTime} = this.props;
        if (active){
            clearInterval(this.timeInterval);
            stopTime();
        } else {
            startTime();
            this.timeInterval = setInterval(() => {
                updateTime(new Date().toLocaleTimeString());
            }, 1000);
        }
    };


    render() {

        let {time, active} = this.props;

        return (
            <div>
                <span>{time}</span>&nbsp;&nbsp;
                <button onClick={this.handleClick}>
                    {active ? 'Stop' : 'Start'}
                </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedTimer)

