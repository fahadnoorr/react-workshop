import React from 'react';
import SearchResults from "./AirlineComponents/SearchResults";

const AirlineComponent = () => {
    return (
        <div className="lesson-intro">
            <h1>Airlines</h1>
            <div className="lesson-parts">
                <SearchResults />
            </div>
        </div>
    );
};


export default AirlineComponent;
