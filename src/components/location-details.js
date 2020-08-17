import React from 'react';
import PropTypes from 'prop-types';


const LocationDetails = props => <h1 className="location-details">{props.city}, {props.country}</h1>
//const LocationDetails = () => <h1 className="location-details" />;
//const LocationDetails = props => <h1 className="location-details">{props.city}, {props.country}</h1>;



LocationDetails.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired, 
}
LocationDetails.defaultProps = {
    city: "Manchester",
    country: "UK",
}

export default LocationDetails;