import React from 'react';
import { connect } from 'react-redux';
import {
  DoIncrement,
  DoDecrement,
  DoReset,
  DoStep,
  DOMax
} from '../state/actions';

class Counter extends React.Component {
  render() {
    let { count, step, max, dispatch } = this.props;
    return (
      <div className="container">
        <div className="title">
          <h2 className="count">{count}</h2>
        </div>
        <div className="idrbtn">
          <button className="increment btn" onClick={() => dispatch(DoIncrement())}>
            Increment
          </button>
          <button className="decrement btn" onClick={() => dispatch(DoDecrement())}>
            Decrement{' '}
          </button>
          <button className="reset btn" onClick={() => dispatch(DoReset())}>
            Reset
          </button>
        </div>
        <p className="sub-heading">STEP</p>
        <div className="step-btn">
          {[5, 8, 10, 12, 14, 16].map(event => (
            <button
              onClick={() => dispatch(DoStep(event))}
              className={`btn1 ${step === event ? ' active' : ''} btn btn_primary `} 
            >
              {event}
            </button>
          ))}
        </div>
        <p className="sub-heading">MAX</p>
        <div className="max-btn">
          {[50, 100, 200, 500, 1000].map(event => (
            <button
              onClick={() => dispatch(DOMax(event))}
              className={`btn1 ${max === event ? ' active' : ''}  btn btn_secondary`}
            >
              {event}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count, step: state.step, max: state.max };
}

export default connect(mapStateToProps)(Counter);
