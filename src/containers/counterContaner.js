import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCounterAction } from '../redux/actions/counterAction';

export class CounterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: props.counter.counter
        }
    }

    increment = (counter) => {
        this.props.setCounter(counter + 1)
    }
    decrement = (counter) => {
        this.props.setCounter(counter - 1);
    }

    render() {
        let { counter } = this.props.counter;

        return (
            <div className="CounterContainer">
                <button onClick={() => this.decrement(counter)}>Giảm</button>
                <p>{counter}</p>
                <button onClick={() => this.increment(counter)}>Tăng</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('state: ', state);
    return ({
        counter: state.counter
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setCounter: counter => dispatch(setCounterAction(counter))
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);
