import React from "react";
import TemperatureInput from './TempInput';
import TemperatureOutput from './TempOutput';

export default class TemperatureCalculator extends React.Component{

    UNITS = {
        Fahrenheit: 'Fahrenheit',
        Celsius: 'Celsius'
    };

    CONVERTERS = {
        Fahrenheit: temperature =>  (temperature * 9/5) + 32,
        Celsius: temperature =>  (temperature - 32) * 5/9
    };

    constructor(props){
        super(props);

        this.state = {
            temperature: ''
        }
    }

    convertTemperature = (unit, temperature) => {
        if (Number.isNaN(parseFloat(temperature))) {
            return '';
        }
        return this.CONVERTERS[unit](temperature);
    };

    temperatureChanged = (unit, temperature) => {
        if (unit === this.UNITS['Celsius']){
            this.setState({temperature: temperature});
        } else {
            this.setState({temperature: this.convertTemperature('Celsius', temperature)});
        }
    };

    render(){
        let {temperature} = this.state;

        return (
            <section className="lesson-calculator info-panel">
                <h2>Temperature Calculator</h2>

                <div className="form-holder">
                    <TemperatureInput
                        unit={this.UNITS['Celsius']}
                        temperature={temperature}
                        onChange={this.temperatureChanged} />
                    <TemperatureInput
                        unit={this.UNITS['Fahrenheit']}
                        temperature={this.convertTemperature('Fahrenheit', temperature)}
                        onChange={this.temperatureChanged} />
                    <TemperatureOutput temperature={temperature} />
                </div>

            </section>
        );
    }



}