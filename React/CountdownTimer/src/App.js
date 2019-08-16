import React from 'react';
import './App.css';
import CurrentTime from './current-time'
import StartTimerButton from './start-timer-button'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { currentTime: 60, busy: false }
  }

  startCountdown = () => {
    console.log('starting')

    setInterval(() => {
      const { currentTime } = this.state
      this.setState({ currentTime: currentTime - 1 })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <CurrentTime time={this.state.currentTime}/>
          <StartTimerButton startCountdown={this.startCountdown} />
        </header>
      </div>
    );
  }
}

export default App;
