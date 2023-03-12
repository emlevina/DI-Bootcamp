import React from 'react';
import { connect } from 'react-redux';
import { changePropOne } from '../redux/actions';

const Child = (props) => {
    return (
        <div>
            <h1>Child</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.changePropOne(e.target.input.value)
                e.target.reset()
            }}>
                <input type="text" name='input' />
                <button>Change</button>
            </form>
            {props.a}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        a: state.prop_one
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      changePropOne: (value) => dispatch(changePropOne(value))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Child);
