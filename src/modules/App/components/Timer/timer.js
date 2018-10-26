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

    handleClick = () => {
        let {active, startTime, stopTime} = this.props;
        if (active){
            stopTime();
        } else {
            startTime();
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

