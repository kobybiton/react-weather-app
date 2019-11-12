import React from 'react';
import './Forecast1Day.css';

class Forecast1Day extends React.Component {

	constructor(props) {
		super(props);

 		this.day = this.props.day;
		switch(this.props.day) {
		  case 2:
		    this.day = 'Tuesday';
		    break;
		  case 3:
		    this.day = 'Wednesday';
		    break;
		  case 4:
		    this.day = 'Thursday';
		    break;
		  case 5:
		    this.day = 'Friday';
		    break;
		  case 6:
		    this.day = 'Saturday';
		    break;			    	    		    		    
		}          
	}

    render () {
        return (
            <div className="forecast">
                <h2>{this.day}</h2>
                { <img src={this.props.icon} /> }	
                <p><span>{this.props.temperature}&#8451;</span> &nbsp; <span><b>{this.props.description}</b></span></p>
            </div>    
        );
    }
}
export default Forecast1Day;