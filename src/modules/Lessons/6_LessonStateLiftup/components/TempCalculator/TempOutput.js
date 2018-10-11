import React from 'react';
import classnames from 'classnames';

const TemperatureOutput = ({temperature}) => {
    return (
        <span className={classnames('boiling-notice', {'bold-text': temperature > 100})}>
        {
            temperature > 100 ? 'Water has Boiled!' : 'Water is not hot enough..'
        }
      </span>
    );
};

export default TemperatureOutput;