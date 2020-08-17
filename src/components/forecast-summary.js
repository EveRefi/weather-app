import React from "react";
import PropTypes from 'prop-types';

const ForecastSummary = props => {
    return (
    <div className="forecast-summary"> 
        <div className="date"> {props.date}</div>
        <div className="temperature">{props.temperature}</div>
        <div className="description">{props.description}</div>
        <div className="icon">{props.icon}</div>
    </div>
 )

}
    
export default ForecastSummary;      

    


