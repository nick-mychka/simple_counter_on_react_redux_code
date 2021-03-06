import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import Button from '../../components/Button/Button';

class Counter extends Component {
	// state = {
	// 	counter: 0
	// }

	// counterChangedHandler = (action, value) => {
	// 	switch(action) {
	// 		case 'inc': 
	// 			this.setState((prevState) => {return {counter: prevState.counter + value}})
	// 			break;
	// 		case 'dec': 
	// 			this.setState((prevState) => {return {counter: prevState.counter - value}})
	// 			break;
	// 		case 'add': 
	// 			this.setState((prevState) => {return {counter: prevState.counter + value}})
	// 			break;
	// 		case 'sub': 
	// 			this.setState((prevState) => {return {counter: prevState.counter - value}})
	// 			break;
	// 	}
	// }

	render() {
		return(
			<div>
				<CounterOutput value = {this.props.storedCounter} />
				<CounterControl label = "Increment" clicked = {this.props.onIncrementCounter} />
				<CounterControl label = "Decrement" clicked = {this.props.onDecrementCounter} />
				<CounterControl label = "Add 5" clicked = {this.props.onAddCounter} />
				<CounterControl label = "Subtract 5" clicked = {this.props.onSubtractCounter} />
				<hr />
				<Button clicked={() => this.props.onStoreResult(this.props.storedCounter)}>Store Result</Button>
				<ul style = {{width: '80%', paddingLeft: '0px', margin: '10px auto', listStyleType: 'none' }}>
					{this.props.storedResults.map(strResult => (
						<li 
							key = {strResult.id}
							style = {{width: '100%', height: '50px', lineHeight: '50px', margin: '10px 0', cursor: 'pointer',  boxShadow: '0 1px 1px -2px rgba(0,0,0,.2), 0 1px 2px 0 rgba(0,0,0,.14), 0 1px 2px 0 rgba(0,0,0,.12)'}}
							onClick={() => this.props.onDeleteResult(strResult.id)}>
							{strResult.value}
						</li>
					))}	
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		storedCounter: state.ctr.counter,
		storedResults: state.res.results
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch(actionCreators.increment()),
		onDecrementCounter: () => dispatch(actionCreators.decrement()),
		onAddCounter: () => dispatch(actionCreators.add(5)),
		onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
		onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
		onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
	};
} ;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);