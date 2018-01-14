import React from 'react'
import './../styles/app.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 className='flex flex-center'>
          <span>React Project Template</span>
        </h3>
      </div>
    )
  }
}