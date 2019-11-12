import React from 'react';
import './App.css';
import Forecast1Week from "./Forecast1Week/Forecast1Week";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Forecast1Week />
            </div>
        );
    }

}

export default App;
