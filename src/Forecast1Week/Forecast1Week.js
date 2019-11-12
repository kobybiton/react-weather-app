import React from 'react';
import Forecast1Day from "./Forecast1Day/Forecast1Day";
import './Forecast1Week.css';

//import './Homepage.css';

class Forecast1Week extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forecasts: []
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast') 
            .then(res => res.json())
            .then(forecasts => {
                this.setState({forecasts: forecasts.slice(0, 10)});
            });
    }

    render () {
        return (
            <div className="forecasts">
                {this.state.forecasts.map(forecast => {
                    const image = require(`../icons/${forecast.icon}.png`);
                    return <Forecast1Day day={forecast.day} temperature={forecast.temperature} icon={image} description={forecast.description}/>
                })}                 
            </div>    
        );
    }
}
export default Forecast1Week;