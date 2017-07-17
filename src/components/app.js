import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
 class App extends Component {

    constructor(props) {
        super(props);
    }

	render() {
		return (
            <div>
                <button onClick={this.onReset}>Reset</button>
                <div>Seconds passed: {this.props.appState.timer}</div>
                <DevTools />
            </div>
        );
	}

	onReset = () => {
        this.props.appState.resetTimer();
    }


}


export default App;