import React from "react";

export default class TemperatureInput extends React.Component{

    shouldComponentUpdate(nextProps){
        return nextProps.temperature !== this.props.temperature;
    }

    onChangeHandler = (event) => {
        this.props.onChange(this.props.unit, event.target.value);
    };

    render(){

        let {unit, temperature} = this.props;

        return (
            <fieldset>
                <input type="number" min="0" step="1"
                    placeholder={`Enter temperature in ${unit}`}
                    value={temperature}
                    onChange={this.onChangeHandler}
                />
            </fieldset>
        )
    }
};