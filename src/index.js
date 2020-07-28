import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	

	state = {lat: null, errorMessage: '' };

	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
		//used to print position --latitude longitude
		 position => this.setState({lat:position.coords.latitude}),
		err => this.setState({errorMessage:err.message })
		);
	}


	renderContent(){
		if(this.state.errorMessage && !this.state.lat){
			return  <div> Error: {this.state.errorMessage}</div>;
		}

		if(!this.state.errorMessage && this.state.lat){
			// return <div>Latitude:{this.state.lat}</div>
			return <SeasonDisplay lat={this.state.lat}/>
		}

		return <Spinner message="Please accept network request"/>;
	}

	render() {
		return(
		<div className="border red">
			{this.renderContent()}
		</div>
		);
		
	};
}

ReactDOM.render(
	<App/>, 
	document.getElementById('root')
	);