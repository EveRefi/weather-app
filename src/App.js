import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import LocationDetails from './components/location-details';
import ForecastSummary from './components/forecast-summary';
import ForecastSummaries from './components/forecast-summaries';

const App = props => {
  return(
  <div>
  <LocationDetails 
    city={props.location.city} 
    country={props.location.country}
  />
  <ForecastSummaries />

  <ForecastSummary 
    date={props.forecasts.date} 
    temperature={props.forecasts.temperature}
    description={props.forecasts.description}
    icon={props.forecasts.icon}
  />

  </div>
  )

}



App.propTypes = {
  location:PropTypes.shape({city: PropTypes.string, country: PropTypes.string}).isRequired,
  //city: PropTypes.string,
};
 App.defaultProps = {
   city: "*",
  };

export default App;
