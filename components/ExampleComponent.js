import React, { Component, PropTypes } from 'react'

class ExampleComponent extends Component {
  render() {
    const { exampleWord } = this.props
    return (
      <div className='exampleComponentContainer'>
        Hello { exampleWord }
      </div>
      )
  }
}

export default ExampleComponent