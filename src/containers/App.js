import React from 'react';
import './../styles/app.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h5 className='flex'>
        React Project Template
      </h5>
    )
  }
}