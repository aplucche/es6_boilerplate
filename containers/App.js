import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ReactDOM from 'react-dom'
import * as Actions from '../actions'

import ExampleComponent from '../components/ExampleComponent'

class App extends Component {
  render() {
    const { actions, exampleWord } = this.props
    return (
      <div className='appContainer'>
      <input className='exampleTextBox' ref='exampleRef' type='text'/>
      <button onClick={ () => actions.exampleAction(ReactDOM.findDOMNode(this.refs.exampleRef).value) }>Submit Name</button>
      <ExampleComponent exampleWord={ exampleWord }/>
      </div>
    )
  }
}

//Redux Setup
function mapStateToProps(state) {
  return {
    exampleWord: state.application.exampleWord
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)