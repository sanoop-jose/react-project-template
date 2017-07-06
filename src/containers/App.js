import React from 'react'
import './../styles/app.scss'
import ReactSingleDropdown from 'react-single-dropdown'

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
      <ReactSingleDropdown
        width='200'
        defaultSelected='Option 2'
        options={['Option 1','Option 2','Option 3']}
        />
      </div>
    )
  }
}