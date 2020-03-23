import React from 'react';
import { bindActionCreators } from 'redux';
import './counter.css';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron text-center">
            <h2>{counter}</h2>

            <button
                onClick={dec}
                className="btn btn-primary btn-large">DEC</button>

            <button
                onClick={inc}
                className="btn btn-primary btn-large">INC</button>

            <button
                onClick={rnd}
                className="btn btn-primary btn-large">RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

const mapDispatchToProps = (dispatch) => {

    const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random() * 10);
            rnd(randomValue);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);